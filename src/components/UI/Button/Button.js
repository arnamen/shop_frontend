import React from 'react'

import classes from './Button.module.css';

export default function Button( props ) {
    let classNames = '';
    if(props.className) classNames=props.className;
    return (
        <button className={`Button ${classNames}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
