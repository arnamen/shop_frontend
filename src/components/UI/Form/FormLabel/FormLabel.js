import React from 'react'

import classes from './FormLabel.module.css';

export default function FormLabel( props ) {
    const classname = [classes['FormLabel']];
    props.required && classname.push(classes['FormLabel-required']);
    props.className && classname.push(props.className);
    return (
        <label htmlFor={props.for} className={classname.join(' ')}>
            {props.children}
        </label>
    )
}
