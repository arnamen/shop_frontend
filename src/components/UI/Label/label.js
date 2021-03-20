import React from 'react'

import classes from './label.module.css';

export default function label( props ) {

    let className  = [classes.Label, classes[`${'Label_' + props.type}`]];
    if(props.className) className.push(classes[props.className]);
    return (
        <div className={className.join(' ')}>
            {props.children}
        </div>
    )
}
