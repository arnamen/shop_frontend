import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { v4 } from 'uuid';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import AuthModal from '../../components/AuthModal/AuthModal';

import classes from './Burger.module.css';
import { connect } from 'react-redux';

function Burger(props) {

    const [showBurger, setShowBurger] = useState()
    const [showAuthForm, setShowAuthForm] = useState(false);

    if (!props.data) return <React.Fragment></React.Fragment>

    useEffect(() => {
        if (showBurger) {
            disableBodyScroll(document.getElementsByClassName(classes['Burger__itemsList']) || <span></span>);
        } else {
            enableBodyScroll(document.getElementsByClassName(classes['Burger__itemsList']) || <span></span>);
        }
    }, [showBurger])

    const burgerList = <div className={classes.Burger__itemsList}>
        {props.data.map(item => {

            return <div key={v4()}>
                {(item.name === "Аккаунт" && !props.userId)
                    ? <span className={classes.Burger__item} onClick={() => setShowAuthForm(true)}>
                        {item.name}
                    </span>
                    : <Link href={item.to}>
                        <a className={classes.Burger__item}>
                            {item.name}
                        </a>
                    </Link>}

            </div>
        })}
    </div>

    return (
        <>
            <div className={classes.Burger} onClick={(e) => { e.preventDefault(); setShowBurger(!showBurger); }}>
                <div className={classes.Burger__lines}>
                    <div className={classes.Burger__line}></div>
                    <div className={classes.Burger__line}></div>
                    <div className={classes.Burger__line}></div>
                </div>
                <img className={classes.Burger__dummyImg} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt='dummy' />
                {typeof showBurger !== 'undefined' && <div className={`${classes['Burger__padding']} 
            ${!showBurger
                        ? classes['Burger__hide']
                        : classes['Burger__show']}`}>
                    <div className={classes.Burger__list}>{burgerList}</div>
                </div>}
            </div>
            {process.browser && showAuthForm && <AuthModal onClose={() => setShowAuthForm(false)}
                visible={showAuthForm}
                authFormType={"login"} />}
        </>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    };
}

export default connect(mapStateToProps)(Burger)