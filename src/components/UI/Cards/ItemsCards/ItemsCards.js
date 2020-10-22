import React from 'react'

import ItemsCard from './ItemsCard/ItemsCard';

import './ItemsCards.css';

export default function ItemsCards( props ) {
    let cards;
    if(props.itemsData && props.itemsData.length) {
        cards =  props.itemsData.map((itemData) => {
            return <ItemsCard itemData={itemData}/>   
        })
    }

    return (
        <div>
            <div className='title'>some title</div>
            {cards}
        </div>
    )
}
