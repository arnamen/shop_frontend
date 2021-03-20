import React from 'react';

import classes from './SidebarItem.module.css';

export default function SidebarItem ( props ) {
    return (
        <li className={classes.SidebarItem} onClick={e => e.stopPropagation()}>
            {props.children}
        </li>
    )
}