import React from 'react'
import { Link } from 'react-router-dom';

import './PopupButton.css';

export default function PopupButton( props ) {
    const classes = [];
    classes.push('Popup__button');
    props.blue && classes.push('Popup__button-blue')
    return (
             props.onClick 
            ? <button className={classes.join(' ')} onClick={props.onClick}>{props.children}</button>
            : <Link className={classes.join(' ')} to={props.to || ''}>{props.children}</Link>
    )
}