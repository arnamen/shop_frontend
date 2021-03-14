import React, {useEffect} from 'react'
import { v4 } from 'uuid';
import {Link} from 'next/router';

import classes from './Dropdown.module.css';

import {ReactComponent as ReactChevronRight} from '../../../../public/assets/misc/right-chevron.svg';

export default function Dropdown(props) {
  const itemsData = props.items || [];

  //превратить вложенный список в ul>li>ul...
  const getListItems = (itemsData = []) => {
    const listItems = itemsData.map((itemData, index) => {
      // если у обьекта есть дочерние элементы - рекурсивно создать ещё один список
      // который зависит от этого элемента (раскрывается при наведении)
      if (itemData.children) {
        /* выровнять все дропдауны по одному уровню */
        let verticalAlignment = 100;

        if (index !== 0)
        //пересчитать вертикальную позицию нового списка относительно родитльского элемента 
        //чтобы прижать его к верху
          verticalAlignment = -index * 100;
        //

        return <li key={v4()} className={classes['nav-item']}>

          {index === 0 && <span className={classes.dots}></span>}

          <Link href={itemData.to || '/'}>
            <span>{itemData.text}</span>
          </Link>

          {index !== 0 && <ReactChevronRight className={classes.chevron}/>}

          {/* при создании нового списка учитывать границу при наведении 3 пикселя */}

          <ul className={classes['nested-navigation']}
            style={{
              height: 5 * (itemData.children.length) + 'vh',
              top: `calc(${verticalAlignment}% - ${3 * index}px)`,
              zIndex: index}}>
            {/* создать дочерние элементы */}
            {getListItems(itemData.children)}
          </ul>

        </li>
      }
      // иначе вернуть обычный элемент
      return <li key={v4()} className={classes['nav-item']}>
        <Link href={itemData.to}><span>{itemData.text}</span></Link>
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
