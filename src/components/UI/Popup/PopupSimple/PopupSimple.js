import React from 'react';

import classes from './PopupSimple.module.css';

const PopupSimple = ( props ) => {
    return (
        <div className={classes.PopupSimple}>
            {props.children}
        </div>
    );
}

export default PopupSimple;
