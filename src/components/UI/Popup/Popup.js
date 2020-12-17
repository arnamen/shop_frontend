import React from 'react'

import PopupItemsTable from './PopupItemsTable/PopupItemsTable';

import './Popup.css';
import PopupEmpty from './PopupEmpty/PopupEmpty';
import PopupList from './PopupList/PopupList';
import PopupButton from './PopupButton/PopupButton';

export default function Popup(props) {

    let content;

    //если в popup переданы товары
    if (props.items && props.items.length > 0) content = <PopupItemsTable content={props.items} onDelete={props.onDelete}/>
    //если в popup переданы любые другие данные
    else if(props.listData) content = <PopupList listData={props.listData}/>
    else if ((props.content && props.content.length === 0) || !props.content) content = <PopupEmpty type={props.type}/>

    return (
        <div className='Popup' onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}>
            <div>
                {content}
            </div>
            <div className='Popup__actions-wrapper'>
                {props.children}
            </div>
        </div>
    )
}

Popup.Button = PopupButton;