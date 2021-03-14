import React from 'react'
import {v4} from 'uuid';
import { Link } from 'next/router';

import classes from './PopupList.module.css';

export default function PopupList( props ) {
    return (
        <div className={classes.PopupList}>
            <ul>
                {props.listData.map(listItem => <li key={v4()}>
                <Link href={listItem.to || '/'}>{listItem.title}</Link>
                </li>)}
            </ul>
        </div>
    )
}
