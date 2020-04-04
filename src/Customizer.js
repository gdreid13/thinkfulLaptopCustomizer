import React from 'react';
import Selector from './Selector';

export default function Customizer(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
            <Selector />
        </form>
    )
}