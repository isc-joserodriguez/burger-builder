import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData'

const Checkout = props => {
    const ings = useSelector(state => state.burgerBuilder.ingredients);
    const purchased = useSelector(state => state.order.purchased);

    const checkoutCancelled = () => {
        props.history.goBack();
    }

    const checkoutContinued = () => {
        props.history.replace('/checkout/contact-data');
    }

    let summary = <Redirect to="/" />;
    if (ings) {
        const purchasedRedirect = purchased ? <Redirect to="/" /> : null;
        summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary
                    ingredients={ings}
                    checkoutCancelled={checkoutCancelled}
                    checkoutContinued={checkoutContinued} />
                <Route
                    path={props.match.path + '/contact-data'}
                    component={ContactData} />
            </div>
        );
    };

    return (
        <div>
            {summary}
        </div>
    )
}

export default Checkout;