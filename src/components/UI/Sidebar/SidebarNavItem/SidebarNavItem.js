import React, { useState } from 'react'

import classes from './SidebarNavItem.module.css';

import {ReactComponent as ReactChevronRight} from '../../../../../public/assets/misc/right-chevron.svg';
import {ReactComponent as ReactChevronDown} from '../../../../../public/assets/misc/down-chevron.svg';

export default function SidebarNavItem ( props ) {

    const [showList, setShowList] = useState(false);

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
            <ul className={showList ? 'SidebarNavItem__inner' : 'SidebarNavItem__inner-hide'}>
            {props.children}
            </ul>
        </li>
    )
}
