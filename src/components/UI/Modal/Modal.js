import React, { useEffect, useRef, useState } from 'react'
import { Portal } from 'react-portal';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import classes from './Modal.module.css';

export default function Modal(props) {

    const [lockScroll, setLockScroll] = useState(false)

    const modalRef = useRef();
    if (lockScroll) {
        if (props.visible) disableBodyScroll(modalRef.current);
        else clearAllBodyScrollLocks();
    }
    //спровоцировать дополнительный ререндер для обновления ref
    useEffect(() => {
        setLockScroll(props.visible);
    }, [props])

    useEffect(() => {
        return () => {
            clearAllBodyScrollLocks();
        }
    }, [])

    return (
        props.visible
            ? <Portal node={document && document.getElementById('root')}>
                <div className={classes.Modal__background} onClick={() => props.onClose() || 0}>
                    <div className={classes.Modal__wrapper} onClick={(e) => e.stopPropagation()} ref={modalRef}>
                        {props.children}
                    </div>
                </div>
            </Portal>
            : <React.Fragment />
    )
}
