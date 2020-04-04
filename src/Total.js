import React from 'react';

export default function Total(props) {
    return (
        <div>>
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
            </div>
        </div>
    )
}