import React from 'react';
import CartItems from './CartItems';
import Total from './Total';

export default function Cart(props) {
    return (
        <div>>
            <h2>Your cart</h2>
                <CartItems />
            <div className="summary__total">
                <Total />
            </div>
        </div>
    )
}