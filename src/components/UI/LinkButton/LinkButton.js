import React from 'react'
import { NavLink } from 'next/router'

import './LinkButton.css';
/*  TODO
 *   add custom navlink
 */
export default function LinkButton( props ) {

    return (
            <React.Fragment>
                {props.to 
                ? <Link activeClassName='LinkButton__active' className='LinkButton' href={props.to}><span>{props.children}</span></Link> 
                : <span className='LinkButton'>{props.children}</span>}
            </React.Fragment>
    )
}
