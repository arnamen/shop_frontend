import React, { useState } from 'react'

import './SidebarNavItem.css'

import {ReactComponent as ReactChevronRight} from '../../../../assets/misc/right-chevron.svg';
import {ReactComponent as ReactChevronDown} from '../../../../assets/misc/down-chevron.svg';

export default function SidebarNavItem ( props ) {

    const [showList, setShowList] = useState(true);

    return (
        <li className='SidebarNavItem' onClick={() => setShowList(!showList)}>
            <div className='SidebarNavItem__title-wrapper'>
                <span className='SidebarNavItem__title'>{props.title}</span>
                {showList 
                ? <ReactChevronDown className='chevron'/> 
                : <ReactChevronRight className='chevron'/>}
            </div>
            <ul className={showList ? 'SidebarNavItem__inner' : 'SidebarNavItem__inner-hide'}>
            {props.children}
            </ul>
        </li>
    )
}
