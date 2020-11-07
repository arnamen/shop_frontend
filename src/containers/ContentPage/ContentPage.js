import React from 'react'

import Sidebar from '../../components/UI/Sidebar/Sidebar';


import './ContentPage.css';

export default function ContentPage() {
    return (
        <div className='ContentPage'>
            <Sidebar>
                <Sidebar.Item>
                    <a href='/'>TESTITEM</a>
                </Sidebar.Item>

                <Sidebar.Item>
                <a href='/'>TESTITEM</a>
                </Sidebar.Item>

                <Sidebar.NavItem title='TESTNAVITEM'>

                    <Sidebar.Item>
                    <a href='/'>TESTITEM2</a>
                    </Sidebar.Item>

                    <Sidebar.Item>
                    <a href='/'>TESTITEM2</a>
                    </Sidebar.Item>

                </Sidebar.NavItem>

                <Sidebar.Item>
                <a href='/'>TESTITEM</a>
                </Sidebar.Item>

                <Sidebar.Item>
                <a href='/'>TESTITEM</a>
                </Sidebar.Item>

                <Sidebar.Item>
                <a href='/'>TESTITEM</a>
                </Sidebar.Item>
            </Sidebar>
        </div>
    )
}
