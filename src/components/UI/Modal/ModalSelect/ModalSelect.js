import React, { useState } from 'react'
import { v4 } from 'uuid';

import Modal from '../Modal';

import { ReactComponent as ReactMagnifier } from '../../../../assets/search/magnifier-black.svg';

import './ModalSelect.css';

//в props необходимо передавать данные вида
/* {
    placeholder: String,
    data: [
        ...
        {
            name: String,
            subtitle: String optional
        }
        ...
    ],
    onSubmit: function
} */

export default function ModalSelect(props) {

    const [filterString, setFilterString] = useState("")

    const selectItems = [];

    props.data.forEach((item) => {
        if (item.name.toLowerCase().includes(filterString.toLowerCase()))
            selectItems.push(<div key={v4()} 
            onClick={() => props.onSubmit(item)}
            className='ModalSelect__selectItem'>
                <span className='ModalSelect__selectItem-name' key={v4()}>{item.name}</span>
                {item.subtitle && <span key={v4()} className='ModalSelect__selectItem__subtitle'>{item.subtitle}</span>}
            </div>
            )
    }
    )

    return (
        <Modal onClose={props.onClose} visible={props.visible}>
            <header className='ModalSelect__header'>
                <div className='ModalSelect__title'>
                    <ReactMagnifier className='ModalSelect__searchIcon' />
                    <input type='text'
                        placeholder={props.placeholder || 'Поиск, например: Одесса'}
                        className='ModalSelect__input'
                        onChange={(e) => setFilterString(e.target.value)} />
                </div>
            </header>
            <div className='Modal__content'>
                {selectItems}
            </div>
        </Modal>
    )
}
