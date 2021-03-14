import React from 'react'
import { NavLink } from 'next/router'

import classes from './LinkButton.module.css';
/*  TODO
 *   add custom navlink
 */
export default function LinkButton( props ) {

    return (
            <React.Fragment>
                {props.to 
                ? <Link activeclassName={classes.LinkButton__active} className={classes.LinkButton} href={props.to}><span>{props.children}</span></Link> 
                : <span className={classes.LinkButton}>{props.children}</span>}
            </React.Fragment>
    )
}
