import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'

const Orders = props => {
    const dispatch = useDispatch();

    const orders = useSelector(state => state.order.orders);
    const loading = useSelector(state => state.order.loading);
    const token = useSelector(state => state.auth.token);
    const userId = useSelector(state => state.auth.userId);


    const onFetchOrders = useCallback((token, userId) => dispatch(actions.fetchOrders(token, userId)),[dispatch]);

    useEffect(() => {
        onFetchOrders(token, userId);
    }, [onFetchOrders, token, userId]);

    return (
        <div>
            {
                loading
                    ? <Spinner />
                    : orders.map(order => (
                        <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.price} />
                    ))
            }
        </div>
    );
}

export default withErrorHandler(Orders, axios);