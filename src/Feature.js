import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default function Feature (props) {
    return (
        <div className="summary__option" key={props.key}>
            <div className="summary__option__label">{props.feature} </div>
            <div className="summary__option__value">{props.name}</div>
            <div className="summary__option__cost">
                {USCurrencyFormat.format(props.cost)}
            </div>
        </div>
    );
}