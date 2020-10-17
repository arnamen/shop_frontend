import React from 'react'
import { v4 } from 'uuid';

import './Dropdown.css';
import './Chevron.css'

export default (props) => {
  const itemsData = props.items || [];

  //превратить вложенный список в ul>li>ul...
  const getListItems = (itemsData = [], level = 0) => {
    
    const listItems = itemsData.map((itemData) => {

      if (itemData.children) {
        /* выровнять все дропдауны по одному уровню */
        let verticalAlignment = 100;

        if (level !== 0) 
          verticalAlignment = -100 * (level);
        //
        
        return <li key={v4()} className='nav-item'>
          {level === 0 && <span className='dots'></span>}
          <a href={itemData.to || '#'}><span>{itemData.text}</span></a>
          {level !== 0 && <span class="chevron right"></span>}
          <ul className='nested-navigation'
            style={{ 
              height: 5*(itemData.children.length) + 'vh',
              top: verticalAlignment + '%'
               }}>
              {/* создать дочерние элементы */}
            {getListItems(itemData.children, level + 1)}
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
