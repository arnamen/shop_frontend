import React from 'react'
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import Sidebar from '../../components/UI/Sidebar/Sidebar';
import ItemsCards from '../../components/UI/Cards/ItemsCards/ItemsCards';
import '../../components/UI/Checkbox/Checkbox';

import * as actionTypes from '../../store/actions/actionTypes';

import './ContentPage.css';
import Checkbox from '../../components/UI/Checkbox/Checkbox';

//для перевода
const translate = {
    diagonal: 'Диагональ',
    battery: 'Батарея',
    processor: 'Процессор',
    resolution: 'Разрешение экрана',
    frequency: 'Частота обновлений'
}

function ContentPage(props) {

    let availableFilters = {
        categories: []
    };

    console.log(props.filters)

    //объединить теги для фильтров
    props.content.forEach(item => {

        Object.keys(item.tags)
            .forEach(key => {
                if (!availableFilters[key]) availableFilters[key] = [];
                //добавить теги в фильтры
                availableFilters[key].push(item.tags[key]);
            });
        //добавить категории в фильтры
        availableFilters.categories = [...new Set([...availableFilters.categories, ...item.categories])]
    });
    //содержимое сайдбара
    const sidebarItems = [];
    //добавить категории в начало списка фильтров
    sidebarItems.push(<Sidebar.NavItem key={v4()} title='Категории'>
        {availableFilters.categories.map(
            category => {
                const id = v4();
                const categoryAlreadyInFilter = !!props.filters.categories.find(categoryInFilter => categoryInFilter === category);
                return <Sidebar.Item key={v4()}>
                    <Checkbox
                        id={id}
                        checked={categoryAlreadyInFilter}
                        onChange={(e) => {
                            categoryAlreadyInFilter
                                ? props.onRemoveCategory(category)
                                : props.onAddCategory(category);
                        }}>
                        {category}
                    </Checkbox>
                </Sidebar.Item>
            }
        )}
    </Sidebar.NavItem>);
    //категории уже добавлены в сайлбар, так что удалить их
    delete availableFilters.categories;
    //создать чекбоксы для фильтрации по тегам
    sidebarItems.push(...Object.keys(availableFilters).map(key => {
        return <Sidebar.NavItem key={v4()} title={translate[key] || key}>
            {availableFilters[key].map(
                filter => {

                    const id = v4();
                    const alreadyFiltered = !!props.filters.tagsFilters.find(usedFilters => usedFilters === filter);

                    return <Sidebar.Item key={v4()} >

                        <Checkbox id={id}
                            checked={alreadyFiltered}
                            onChange={(e) => {
                                alreadyFiltered
                                    ? props.onRemoveFilter(filter)
                                    : props.onAddFilter(filter);
                            }}>
                            {filter}
                        </Checkbox>

                    </Sidebar.Item>
                }
            )}
        </Sidebar.NavItem>
    }))

    const content = props.content.filter(item => {
        let addItem = true;

        if (props.filters.categories.length)
            addItem = !!item.categories.find(category =>

                props.filters.categories.find(
                    categoriesInFilter => categoriesInFilter === category
                )
            ) && addItem;

        if (props.filters.tagsFilters.length)
            addItem = Object.keys(item.tags).find(tag =>

                props.filters.tagsFilters.find(
                    tagFilter => item.tags[tag] === tagFilter
                )
            ) && addItem;
        return addItem;

    })
    
    return (
        <div className='ContentPage'>
            <div className='ContentPage__sidebar-wrapper'>
                <Sidebar title='Фильтры'>
                    {sidebarItems}
                </Sidebar>
            </div>
            <div className='ContentPage__content'>
                <ItemsCards itemsData={content} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
        filters: state.filters
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveCategory: (category) => dispatch({
            type: actionTypes.REMOVE_CATEGORY,
            category,
        }),
        onAddCategory: (category) => dispatch({
            type: actionTypes.ADD_CATEGORY,
            category,
        }),
        onAddFilter: (filter) => dispatch({
            type: actionTypes.ADD_FILTER,
            filter,
        }),
        onRemoveFilter: (filter) => dispatch({
            type: actionTypes.REMOVE_FILTER,
            filter,
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage)