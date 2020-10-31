import React from 'react'
import { NavLink } from 'react-router-dom'

import './LinkButton.css';

export default function LinkButton( props ) {
    const addedClasses = ['LinkButton'];
    return (
        <span className={addedClasses.join(' ')}>
            {props.to 
            ? <NavLink className='LinkButton__NavLink' to={props.to}>{props.children}</NavLink> 
            : <span className='LinkButton__NavLink'>{props.children}</span>}
        </span>
    )
}
