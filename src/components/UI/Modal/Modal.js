import React from 'react'
import { Portal } from 'react-portal';

import './Modal.css';

export default function Modal( props ) {
    return (
        <Portal node={document && document.getElementById('root')}>
            <div className='Modal__background' onClick={() => props.onClose() || 0}>
                <div className='Modal__wrapper' onClick={(e) => e.stopPropagation()}>
                    {props.children}
                </div>
            </div>
        </Portal>
    )
}
