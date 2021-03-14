import React from 'react'

import classes from './label.module.css';

export default function label( props ) {

    let className = 'Label Label_' + props.type;
    if(props.className) className += ' ' + props.className;
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}
