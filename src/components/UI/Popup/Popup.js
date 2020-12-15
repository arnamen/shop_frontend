import React from 'react'
import { Link } from 'react-router-dom';

import PopupItemsTable from './PopupItemsTable/PopupItemsTable';

import { popupMessages } from '../../../utils/popup_messages';

import './Popup.css';
import PopupEmpty from './PopupEmpty/PopupEmpty';
import PopupList from './PopupList/PopupList';

export default function Popup(props) {

    let content;

    let redirectButton;
    let actionButton;
    //если в popup переданы товары
    if (props.items && props.items.length > 0) content = <PopupItemsTable content={props.items} onDelete={props.onDelete}/>
    //если в popup переданы любые другие данные
    else if(props.listData) content = <PopupList listData={props.listData}/>
    else if ((props.content && props.content.length === 0) || !props.content) content = <PopupEmpty type={props.type}/>
    //если в props указано redirectButtonNotEmpty (показывать кнопку только если есть товары)
    //то показать кнопку
    if (props.redirectButton || (props.redirectButtonNotEmpty && props.items && props.items.length > 0)) {
        try {
            let redirectButtonData = popupMessages.redirectButton[props.type];
        redirectButton = <Link className='Popup__redirect-button' to={redirectButtonData.to}>{redirectButtonData.title}</Link>
        } catch (error) {
            console.log('Не получилось создать кнопку редиректа в Popup')
        }
    }
    //если в props указано actionButtonNotEmpty (показывать кнопу только если есть товары)
    //то показать кнопку
    if (props.actionButton || (props.actionButtonNotEmpty && props.items && props.items.length > 0)) {
        try {
            let actionButtonData = popupMessages.actionButton[props.type];
            actionButton = <Link className='Popup__action-button' to={actionButtonData.action}>{actionButtonData.title}</Link>;
        } catch (error) {
            console.log('Не получилось создать кнопку действия в Popup');
        }
    }

    return (
        <div className='Popup' onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}>
            <div>
                {content}
            </div>
            <div className='Popup__actions-wrapper'>
                {redirectButton}
                {actionButton}
            </div>
        </div>
    )
}
