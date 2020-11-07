import React from 'react';

import './SidebarItem.css';

export default function ( props ) {
    return (
        <li className='SidebarItem'>
            {props.children}
        </li>
    )
}