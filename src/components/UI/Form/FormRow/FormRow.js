import React from 'react'

import './FormRow.css';

export default function FormRow( props ) {
    const classes = ['FormRow'];
    props.className && classes.push(props.className);
    return (
        <div className={classes.join(' ')}>
            {props.children}
        </div>
    )
}
