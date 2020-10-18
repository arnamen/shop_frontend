import React from 'react'
import { v4 } from 'uuid';

import './Dropdown.css';

export default (props) => {
  const itemsData = props.items || [];

  //превратить вложенный список в ul>li>ul...
  const getListItems = (itemsData = []) => {
    const listItems = itemsData.map((itemData, index) => {

      if (itemData.children) {
        /* выровнять все дропдауны по одному уровню */
        let verticalAlignment = 110;

        if (index !== 0) 
          verticalAlignment = -100 * (index) - index*7;
        //
        
        return <li key={v4()} className='nav-item'>
          {index === 0 && <span className='dots'></span>}
          <a href={itemData.to || '#'}><span>{itemData.text}</span></a>
          {index !== 0 && <span className="chevron right"></span>}
          <ul className='nested-navigation'
            style={{ 
              height: 5*(itemData.children.length) + 'vh',
              top: verticalAlignment + '%',
              zIndex: index
               }}>
              {/* создать дочерние элементы */}
            {getListItems(itemData.children)}
          </ul>

        </li>
      }

      return <li key={v4()} className='nav-item'>
        <a href={itemData.to}><span>{itemData.text}</span></a>
      </li>

    })
    return listItems;
  }

  const listItems = getListItems(itemsData);

  return (
    <ul className="main-navigation">
      {listItems}
    </ul>
  )
}
