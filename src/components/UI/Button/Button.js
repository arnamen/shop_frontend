import React from 'react'

import classes from './Button.module.css';

export default function Button( props ) {
    let classNames = [classes.Button];
    if(props.className) classNames.push(props.className);
    return (
        <button className={classNames.join(' ')} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
