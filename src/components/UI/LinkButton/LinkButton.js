import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import classes from './LinkButton.module.css';
/*  TODO
 *   add custom navlink
 */
export default function LinkButton( props ) {

    const router = useRouter();

    const className = [classes.LinkButton];
    if(router.asPath === props.to) className.push(classes.LinkButton__active)

    return (
            <React.Fragment>
                {props.to 
                ? <Link href={props.to} href={props.to}>
                    <a className={className.join(' ')}>
                        <span>{props.children}</span>
                    </a>
                </Link> 
                : <span className={classes.LinkButton}>{props.children}</span>}
            </React.Fragment>
    )
}
