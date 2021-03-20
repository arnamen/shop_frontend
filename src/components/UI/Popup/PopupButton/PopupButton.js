import React from 'react'
import Link from 'next/link';

import classes from './PopupButton.module.css';

export default function PopupButton(props) {
    const className = [];
    className.push(classes['Popup__button']);
    if(props.blue) className.push(classes['Popup__button-blue'])
    
    return (
        props.onClick
            ? <button className={className.join(' ')} onClick={props.onClick}>{props.children}</button>
            : <Link href={props.to || ''}>
                <a className={className.join(' ')}>
                    {props.children}
                </a>
            </Link>
    )
}
