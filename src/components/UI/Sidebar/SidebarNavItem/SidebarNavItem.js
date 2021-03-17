import React, { useState } from 'react'

import classes from './SidebarNavItem.module.css';

import ReactChevronRight from '../../../../../public/assets/misc/right-chevron.svg';
import ReactChevronDown from '../../../../../public/assets/misc/down-chevron.svg';

export default function SidebarNavItem ( props ) {

    const [showList, setShowList] = useState(false);
    console.log(classes)
    return (
        <li className={classes.SidebarNavItem} onClick={(event) => {
            event.stopPropagation();
            setShowList(!showList);
        }}>
            <div className={classes['SidebarNavItem__title-wrapper']}>
                <span className={classes.SidebarNavItem__title}>{props.title}</span>
                {showList 
                ? <ReactChevronDown className={classes.chevron}/> 
                : <ReactChevronRight className={classes.chevron}/>}
            </div>
            <ul className={showList ? classes['SidebarNavItem__inner'] : classes['SidebarNavItem__inner-hide']}>
            {props.children}
            </ul>
        </li>
    )
}
