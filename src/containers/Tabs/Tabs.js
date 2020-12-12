import React, { useState } from 'react'
import { v4 } from 'uuid';

import './Tabs.css'

export default function Tabs(props) {

    const [selectedTab, setSelectedTab] = useState(0);

    if (!props.tabsNames) return <React.Fragment>{props.children}</React.Fragment>
    const tabs = React.Children.map(props.children, (_, index) => {
        const id = v4();

        return <React.Fragment>
            <input id={id} 
            name='Tabs' 
            type='radio' 
            defaultChecked={index === 0}
            onClick={() => setSelectedTab(index)}
            />

            <label htmlFor={id}>{props.tabsNames[index]}</label>
        </React.Fragment>
    })
    //каждого потомка завернуть в отдельный таб
    const children = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
            key: v4(),
            className: `${child.props.className ? child.props.className : ''} ${index === selectedTab ? '' :'inactive'}`
        })
    })

    return (
        <div className={`Tabs ${props.className ?' ' + props.className : ''}`}>
            <div className='Tabs__radio-wrapper'>
                {tabs}
            </div>
            {children}
        </div>
    )
}
