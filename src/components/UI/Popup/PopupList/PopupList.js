import React from 'react'
import {v4} from 'uuid';
import { Link } from 'react-router-dom';

import './PopupList.css';

export default function PopupList( props ) {
    return (
        <div className='PopupList'>
            <ul>
                {props.listData.map(listItem => <li key={v4()}>
                <Link to={listItem.to || '/'}>{listItem.title}</Link>
                </li>)}
            </ul>
        </div>
    )
}
