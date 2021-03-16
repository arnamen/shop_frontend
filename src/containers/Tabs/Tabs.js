import React, { useState } from 'react'
import { v4 } from 'uuid';

import classes from './Tabs.module.css';

export default function Tabs(props) {

    const [selectedTab, setSelectedTab] = useState(0);

    if (!props.tabsNames) return <React.Fragment>{props.children}</React.Fragment>
    const tabs = React.Children.map(props.children, (_, index) => {
        const id = v4();

        return <React.Fragment>
            <input id={index} 
            name='Tabs' 
            type='radio' 
            defaultChecked={index === 0}
            onClick={() => setSelectedTab(index)}
            />

            <label htmlFor={index}>{props.tabsNames[index]}</label>
        </React.Fragment>
    })
    //каждого потомка завернуть в отдельный таб
    const children = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
            key: index,
            className: `Tabs__tab ${child.props.className ? child.props.className : ''} ${index === selectedTab ? '' :'inactive'}`
        })
    })

    return (
        <div className={`Tabs ${props.className ?' ' + props.className : ''}`}>
            <div className={classes['Tabs__radio-wrapper']}>
                {tabs}
            </div>
            {children}
        </div>
    )
}
