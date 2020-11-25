import React from 'react'
import { Portal } from 'react-portal';

import Button from '../Button/Button';

import './Modal.css';

export default function Modal( props ) {
    return (
        <Portal node={document && document.getElementById('root')}>
            <div className='Modal__background'>
                <div className='Modal__wrapper'>
                    <header className='Modal__title'>
                        <h2>Произошла ошибка</h2>
                    </header>
                    <div className='Modal__content'>
                        {props.message}
                    </div>
                    <div className='Modal__actions'>
                        <Button className='Modal__button'>Закрыть</Button>
                    </div>
                </div>
            </div>
        </Portal>
    )
}
