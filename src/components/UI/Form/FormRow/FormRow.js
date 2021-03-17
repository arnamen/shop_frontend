import React from 'react'

import classes from './FormRow.module.css';

export default function FormRow( props ) {
    const className = [classes['FormRow']];
    props.className && className.push(props.className);
    return (
        <div className={className.join(' ')} onClick={props.onClick}>
            {props.children}
        </div>
    )
}
