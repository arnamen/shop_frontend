import React from 'react'

import TextField from './TextField/TextField'
import Submit from './Submit/Submit';
import Label from './Label/Label';
import './Form.css';

export default function Form( props ) {
    return (
        <form className='Form'>
            {props.Children}
        </form>
    )
}

Form.Input = TextField;
Form.Submit = Submit;