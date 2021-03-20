import React, { useState } from 'react'
import { v4 } from 'uuid';

import classes from './Tabs.module.css';

export default function Tabs(props) {

    const [selectedTab, setSelectedTab] = useState(0);

    if (!props.tabsNames) return <React.Fragment>{props.children}</React.Fragment>
    const tabs = React.Children.map(props.children, (_, index) => {
        const id = 'input_' + index + '_' + selectedTab;
        return <React.Fragment>
            <input id={id} 
            name='Tabs' 
            type='radio' 
            defaultChecked={index === 0}
            onClick={() => setSelectedTab(index)}
            />

            <label htmlFor={id} className={index === selectedTab ? classes.CheckedLabel : ''}>{props.tabsNames[index]}</label>
        </React.Fragment>
    })
    //каждого потомка завернуть в отдельный таб
    const children = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
            key: index,
            className: `${classes.Tabs__tab} ${child.props.className ? classes[child.props.className] : ''} ${index === selectedTab ? '' : classes['inactive']}`
        })
    })

    return (
        <div className={`${classes.Tabs} ${props.className ?' ' + classes[props.className] : ''}`}>
            <div className={classes['Tabs__radio-wrapper']}>
                {tabs}
            </div>
            {children}
        </div>
    )
}
