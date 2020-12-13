import React from 'react';

import ItemsCard from './ItemsCard/ItemsCard';

import './ItemsCards.css';

export default function ItemsCards( props ) {
    let cards;
    if(props.itemsData && props.itemsData.length) {
        cards =  props.itemsData.map((itemData) => {
            return <ItemsCard key={itemData.name} itemData={itemData}/>   
        })
    }

    return (
        <div className={`ItemsCards ${props.className ? props.className : ""}`}>
            {cards}
        </div>
    )
}
