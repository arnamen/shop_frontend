import React from 'react'

import '../../UI/Cards/ItemsCards/ItemsCards';
import ItemsCards from '../../UI/Cards/ItemsCards/ItemsCards';

import './AccountHistory.css';

export default function AccountHistory( props ) {
    return (
        <div className='AccountHistory'>
            <h1>История заказов</h1>
            <ItemsCards itemsData={props.historyItems}/>
        </div>
    )
}
