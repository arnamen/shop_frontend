import React from 'react'

import classes from './FormLabel.module.css';

export default function FormLabel( props ) {
    const classes = ['FormLabel'];
    props.required && classes.push('FormLabel-required');
    props.className && classes.push(props.className);
    return (
        <label htmlFor={props.for} className={classes.join(' ')}>
            {props.children}
        </label>
    )
}
