import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import {v4} from 'uuid';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import classes from './Burger.module.css';

export default function Burger(props) {

    const [showBurger, setShowBurger] = useState(false)

    if (!props.data) return <React.Fragment></React.Fragment>

    useEffect(() => {
        if(showBurger) {
            console.log('here')
            disableBodyScroll(document.querySelector('.Burger__list') || <span></span>);
        } else {
            console.log('here2')
            enableBodyScroll(document.querySelector('.Burger__list') || <span></span>);
        }
    }, [showBurger])

    const burgerList = <div className={classes.Burger__itemsList}>
        {props.data.map(item => {
            return <div key={v4()}>
                <Link className={classes.Burger__item} href={item.to}>{item.name}</Link>
            </div>
        })}
    </div>

    return (
        <div className={classes.Burger} onClick={(e) => {e.preventDefault(); setShowBurger(!showBurger);}}>
            <div className={classes.Burger__lines}>
                <div className={classes.Burger__line}></div>
                <div className={classes.Burger__line}></div>
                <div className={classes.Burger__line}></div>
            </div>
            <img className={classes.Burger__dummyImg} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt='dummy' />
            <div className={`Burger__padding ${!showBurger && ' Burger__hide'}`}>
                <div className={classes.Burger__list}>{burgerList}</div>
            </div>
        </div>
    )
}
