import React from 'react'
import { v4 } from 'uuid';

import './Dropdown.css';

export default (props) => {
  const itemsData = props.items || [];

  //превратить вложенный список в ul>li>ul...
  const getListItems = (itemsData = []) => {
    const listItems = itemsData.map((itemData, index) => {
      // если у обьекта есть дочерние элементы - рекурсивно создать ещё один список
      // который зависит от этого элемента (раскрывается при наведении)
      if (itemData.children) {
        /* выровнять все дропдауны по одному уровню */
        let verticalAlignment = 110;

        if (index !== 0) 
          verticalAlignment = -index*100;
        //
        
        return <li key={v4()} className='nav-item'>

          {index === 0 && <span className='dots'></span>}

          <a href={itemData.to || '#'}><span>{itemData.text}</span></a>

          {index !== 0 && <span className="chevron right"></span>}
          {/* при создании нового списка учитывать границу при наведении 3 пикселя */}
          <ul className='nested-navigation'
            style={{ 
              height:5*(itemData.children.length) + 'vh',
              top: `calc(${verticalAlignment}% - ${3*index}px)`,
              zIndex: index
               }}>
              {/* создать дочерние элементы */}
            {getListItems(itemData.children)}
          </ul>

        </li>
      }
      // иначе вернуть обычный элемент
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
