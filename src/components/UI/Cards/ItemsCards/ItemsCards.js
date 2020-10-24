import React from 'react';
import {v4} from 'uuid';

import ItemsCard from './ItemsCard/ItemsCard';

import './ItemsCards.css';

export default function ItemsCards( props ) {
    let cards;
    if(props.itemsData && props.itemsData.length) {
        cards =  props.itemsData.map((itemData) => {
            return <ItemsCard key={v4()} itemData={itemData}/>   
        })
    }

    return (
        <div className={`ItemsCards ${props.className ? props.className : ""}`}>
            {cards}
        </div>
    )
}
