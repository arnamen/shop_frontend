import React from 'react';

import './PopupSimple.css';

const PopupSimple = ( props ) => {
    return (
        <div className='PopupSimple'>
            {props.children}
        </div>
    );
}

export default PopupSimple;
