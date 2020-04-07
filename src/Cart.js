import React from 'react';
import Feature from './Feature';
// import CartItems from './CartItems';
// import Total from './Total';


export default function Cart(props) {
    console.log(props);
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
        return (
            <Feature
                key={featureHash}
                feature={feature}
                name={selectedOption.name}
                cost={selectedOption.cost}
            />
        );
    })
    return summary;
}