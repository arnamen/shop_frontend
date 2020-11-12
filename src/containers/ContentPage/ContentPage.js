import React from 'react'
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import Sidebar from '../../components/UI/Sidebar/Sidebar';
import ItemsCards from '../../components/UI/Cards/ItemsCards/ItemsCards';
import '../../components/UI/Checkbox/Checkbox';
import useItemsFilter from  '../../hooks/useItemsFilter/useItemsFilter';

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
/* TODO: Вынести фильтрацию в хуки */
function ContentPage(props) {

    const [filteredItems, filterItems, availableFilters] = useItemsFilter();

    //содержимое сайдбара
    const sidebarItems = [];
    //созданиче чекбоксов для фильтров
    //категории фильтровать отдельно
    console.log(availableFilters)
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
    //категории уже добавлены в сайдбар, так что удалить их
    delete availableFilters.categories;
    //создать чекбоксы для фильтрации по тегам
    sidebarItems.push(...Object.keys(availableFilters).map(filterName => {
        return <Sidebar.NavItem key={v4()} title={translate[filterName] || filterName}>
            {availableFilters[filterName].map(filter => {

                    const id = v4();
                    let alreadyFiltered = null;
                    //проверка отмечен ли чекбокс
                    if(!props.filters.tagsFilters[filterName]) alreadyFiltered = false;
                    else if(!!props.filters.tagsFilters[filterName].find(filterString => filterString === filter)) alreadyFiltered = true;
                    else alreadyFiltered = false;

                    return <Sidebar.Item key={v4()} >

                        <Checkbox id={id}
                            checked={alreadyFiltered}
                            onChange={(e) => {
                                alreadyFiltered
                                    ? props.onRemoveFilter({[filterName]: filter})
                                    : props.onAddFilter({[filterName]: filter});
                            }}>
                            {filter}
                        </Checkbox>

                    </Sidebar.Item>
                }
            )}
        </Sidebar.NavItem>
    }))

    const content = filterItems(props.content);
    
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
        onAddFilter: (filters) => dispatch({
            type: actionTypes.ADD_FILTERS,
            filters,
        }),
        onRemoveFilter: (filters) => dispatch({
            type: actionTypes.REMOVE_FILTERS,
            filters,
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage)