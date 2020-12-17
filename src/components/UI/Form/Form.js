import React from 'react'

import TextField from './TextField/TextField'
import Submit from './Submit/Submit';
import FormLabel from './FormLabel/FormLabel';
import FormRow from './FormRow/FormRow';
import './Form.css';

export default function Form( props ) {
    const classes = ['Form'];
    if(props.className) classes.push(props.className)
    return (
        <form className={classes.join(' ')}>
            {props.children}
        </form>
    )
}

Form.TextField = TextField;
Form.Submit = Submit;
Form.Label = FormLabel;
Form.Row = FormRow;