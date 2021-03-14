import React from 'react'

import classes from './../UI/Cards/ItemsCards/ItemsCards';
import ItemsCards from '../../UI/Cards/ItemsCards/ItemsCards';
import ClientAccount from '../';

import classes from './AccountHistory.module.css';

export default function AccountHistory(props) {
    return (
        <ClientAccount>
            <div className={classes.AccountHistory}>
                <h1>История заказов</h1>
                <ItemsCards itemsData={props.historyItems} />
            </div>
        </ClientAccount>
    )
}
