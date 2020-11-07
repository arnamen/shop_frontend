import React from 'react'

import SidebarItem from './SidebarItem/SidebarItem';
import SidebarNavItem from './SidebarNavItem/SidebarNavItem';

import './Sidebar.css';

export default function Sidebar( props ) {
    return (
        <div className='Sidebar__wrapper'>
            <div className='Sidebar__title'>Каталог товаров</div>
            <ul className='Sidebar'>
            {props.children}
            </ul>
        </div>
    )
}

Sidebar.Item = SidebarItem;
Sidebar.NavItem = SidebarNavItem;