import React, { useState } from 'react'

import './SidebarNavItem.css'

import {ReactComponent as ReactChevronRight} from '../../../../assets/misc/right-chevron.svg';
import {ReactComponent as ReactChevronDown} from '../../../../assets/misc/down-chevron.svg';

export default function ( props ) {

    const [showList, setShowList] = useState(false);

    return (
        <li className='SidebarNavItem'>
            <div className='SidebarNavItem__title-wrapper'>
                <span>{props.title}</span>
                {showList 
                ? <ReactChevronDown className='chevron' onClick={() => setShowList(!showList)}/> 
                : <ReactChevronRight className='chevron' onClick={() => setShowList(!showList)}/>}
            </div>
            <ul className={showList ? 'SidebarNavItem__inner' : 'SidebarNavItem__inner-hide'}>
            {props.children}
            </ul>
        </li>
    )
}
