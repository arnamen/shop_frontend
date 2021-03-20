import React from 'react'

import SidebarItem from './SidebarItem/SidebarItem';
import SidebarNavItem from './SidebarNavItem/SidebarNavItem';

import classes from './Sidebar.module.css';

export default function Sidebar( props ) {
    return (
        <div className={classes.Sidebar__wrapper}>
            <div className={classes.Sidebar__title}>{props.title}</div>
            <ul className={classes.Sidebar}>
            {props.children}
            </ul>
        </div>
    )
}

Sidebar.Item = SidebarItem;
Sidebar.NavItem = SidebarNavItem;