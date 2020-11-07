import React from 'react'

import SidebarItem from './SidebarItem/SidebarItem';
import SidebarNavItem from './SidebarNavItem/SidebarNavItem';

import './Sidebar.css';

export default function Sidebar( props ) {
    return (
        <ul className='Sidebar'>
            {props.children}
        </ul>
    )
}

Sidebar.Item = SidebarItem;
Sidebar.NavItem = SidebarNavItem;