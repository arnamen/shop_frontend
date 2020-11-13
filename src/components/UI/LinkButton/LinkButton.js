import React from 'react'
import { NavLink } from 'react-router-dom'

import './LinkButton.css';

export default function LinkButton( props ) {

    return (
            <React.Fragment>
                {props.to 
                ? <NavLink activeClassName='LinkButton__active' className='LinkButton' to={props.to}><span>{props.children}</span></NavLink> 
                : <span className='LinkButton'>{props.children}</span>}
            </React.Fragment>
    )
}
