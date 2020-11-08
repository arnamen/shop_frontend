import React from 'react'
import { connect } from 'react-redux';
import {v4} from 'uuid';

import Button from '../../components/UI/Button/Button';
import Sidebar from '../../components/UI/Sidebar/Sidebar';

import './ContentPage.css';

//для перевода
const translate = {
    diagonal: 'Диагональ',
    battery: 'Батарея',
    processor: 'Процессор',
    resolution: 'Разрешение экрана',
    frequency: 'Частота обновлений'
}

function ContentPage( props ) {

    let availableFilters = {
        categories: []
    };
    //объединить теги для фильтров
    props.content.forEach(item => {

        Object.keys(item.tags)
        .forEach(key => {
            if(!availableFilters[key]) availableFilters[key] = [];
            //добавить теги в фильтры
            availableFilters[key].push(item.tags[key]);
        });
        //добавить категории в фильтры
        availableFilters.categories = [...new Set([...availableFilters.categories, ...item.categories])]
    });
    //содержимое сайдбара
    const sidebarItems = [];
    //добавить категории в начало
    sidebarItems.push(<Sidebar.NavItem key={v4()} title='Категории'>
        {availableFilters.categories.map(
            category => {
                const id = v4();
                return <Sidebar.Item key={v4()} >
                
                
                <label htmlFor={id}>
                    <input id={id} type='checkbox'/>
                    {category}
                </label>
                
                </Sidebar.Item>
            }
            )}
            </Sidebar.NavItem>);
        delete availableFilters.categories;

        sidebarItems.push(...Object.keys(availableFilters).map(key => {
            return <Sidebar.NavItem key={v4()} title={translate[key] || key}>
            {availableFilters[key].map(
                filter => {
                    const id = v4();
                    return <Sidebar.Item key={v4()} >

                    
                    <label htmlFor={id}>
                        <input id={id} type='checkbox'/>
                        {filter}</label>

                    </Sidebar.Item>
                }
                )}
                </Sidebar.NavItem>
        }))
        console.log(availableFilters)

    return (
        <div className='ContentPage'>
            <div className='ContentPage__sidebar-wrapper'>
            <Sidebar title='Фильтры'>
                {sidebarItems}
            </Sidebar>
            </div>
            <div className='ContentPage__content'>

                <div className='ContentPage__filters'>
                    {/* {availableFilters.map(filter => <Button>{filter}</Button>)} */}
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
    };
}

export default connect(mapStateToProps)(ContentPage)