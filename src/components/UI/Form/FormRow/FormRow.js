import React from 'react'

import classes from './FormRow.module.css';

export default function FormRow( props ) {
    const classes = ['FormRow'];
    props.className && classes.push(props.className);
    return (
        <div className={classes.join(' ')} onClick={props.onClick}>
            {props.children}
        </div>
    )
}
