import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}> {igKey}</span>: {props.ingredients[igKey]}
            </li>
        )
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicius burger with the following ingrgedients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

orderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    purchseCanceled: PropTypes.func.isRequired,
    purchaseContinued: PropTypes.func.isRequired
}

export default orderSummary;