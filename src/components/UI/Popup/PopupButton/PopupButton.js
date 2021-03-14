import React from 'react'
import { Link} from 'next/router';

import classes from './PopupButton.module.css';

export default function PopupButton( props ) {
    const classes = [];
    classes.push('Popup__button');
    props.blue && classes.push('Popup__button-blue')
    return (
             props.onClick 
            ? <button className={classes.join(' ')} onClick={props.onClick}>{props.children}</button>
            : <Link className={classes.join(' ')} href={props.to || ''}>{props.children}</Link>
    )
}
