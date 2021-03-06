import React from 'react';

import ItemsCard from './ItemsCard/ItemsCard';

import classes from './ItemsCards.module.css';

export default function ItemsCards( props ) {
    let cards;
    if(props.itemsData && props.itemsData.length) {
        cards =  props.itemsData.map((itemData, index) => {
            return <ItemsCard key={itemData.name + index} itemData={itemData}/>   
        })
    }

    return (
        <div className={`ItemsCards ${props.className ? props.className : ""}`}>
            {cards}
        </div>
    )
}
