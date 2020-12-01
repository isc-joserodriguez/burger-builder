import React from 'react';

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', tupe: 'salad' },
    { label: 'Bacon', tupe: 'bacon' },
    { label: 'Cheese', tupe: 'cheese' },
    { label: 'Meat', tupe: 'meat' },
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => {
                return <BuildControl key={ctrl.label} label={ctrl.label} />
            })}
        </div>
    );
}

export default buildControls;