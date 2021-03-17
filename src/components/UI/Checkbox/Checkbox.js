import React from 'react'

import ReactCheckmark from '../../../../public/assets/misc/checkmark.svg';

import classes from './Checkbox.module.css';

export default function Checkbox( props ) {

    const className = [classes['Checkbox']];
    props.className && className.push(classes[props.className]);

    return (
            <label htmlFor={props.id} className={className.join(' ')}>
                {props.children}
                    <input id={props.id} 
                    type='checkbox'
                    defaultChecked={props.checked || false}
                    onChange={props.onChange || ((e) => 0)}
                    />
                    <ReactCheckmark className={classes.checkmark}></ReactCheckmark>
                </label>
    )
}
