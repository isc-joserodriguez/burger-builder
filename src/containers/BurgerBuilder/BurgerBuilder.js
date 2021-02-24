import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';



const BurgerBuilder = props => {
    const [purchasing, setPurchasing] = useState(false);
    
    const {onInitIngredients}=props;
    
    useEffect(() => {
        onInitIngredients();
    }, [onInitIngredients]);

    const updatePurchaseState = ingredients => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        return sum > 0;
    }

    const purshaseHandler = () => {
        if (props.isAuthenticated) {
            setPurchasing(true);
        } else {
            props.onSetRedirectPath('/checkout');
            props.history.push('/auth');
        }
    }
    const purshaseCancelHandler = () => {
        setPurchasing(false);
    }
    const purchaseContinueHandler = () => {
        props.onInitPurchase();
        props.history.push('/checkout');
    }
    const disabledInfo = {
        ...props.ings
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />
    if (props.ings) {
        burger = (
            <Aux>
                <Burger ingredients={props.ings} />
                <BuildControls
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemove}
                    disabled={disabledInfo}
                    price={props.price}
                    ordered={purshaseHandler}
                    isAuth={props.isAuthenticated}
                    purchasable={updatePurchaseState(props.ings)} />
            </Aux>
        );
        orderSummary = <OrderSummary
            purchaseCanceled={purshaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
            ingredients={props.ings}
            price={props.price} />;
    }

    return (
        <Aux>
            <Modal show={purchasing} modalClosed={purshaseCancelHandler} >
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
    );
}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: !!state.auth.token,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemove: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));