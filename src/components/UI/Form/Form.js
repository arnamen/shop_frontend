import React from 'react'

import TextField from './TextField/TextField'
import Submit from './Submit/Submit';
import FormLabel from './FormLabel/FormLabel';
import FormRow from './FormRow/FormRow';
import classes from './Form.module.css';

export default function Form( props ) {
    const className = [classes['Form']];
    if(props.className) className.push(props.className)
    return (
        <form className={className.join(' ')}>
            {props.children}
        </form>
    )
}

Form.TextField = TextField;
Form.Submit = Submit;
Form.Label = FormLabel;
Form.Row = FormRow;