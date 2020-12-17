import React from 'react'

import {ReactComponent as ReactCheckmark} from '../../../assets/misc/checkmark.svg';

import './Checkbox.css';

export default function Checkbox( props ) {

    const classes = ['Checkbox'];
    props.className && classes.push(props.className);

    return (
            <label htmlFor={props.id} className={classes.join(' ')}>
                {props.children}
                    <input id={props.id} 
                    type='checkbox'
                    defaultChecked={props.checked || false}
                    onChange={props.onChange || ((e) => 0)}
                    />
                    <ReactCheckmark className='checkmark'></ReactCheckmark>
                </label>
    )
}
