import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import queryString from 'query-string';

import Sidebar from '../../components/UI/Sidebar/Sidebar';
import ItemsCards from '../../components/UI/Cards/ItemsCards/ItemsCards';
import '../../components/UI/Checkbox/Checkbox';

import useItemsFilter from  '../../hooks/useItemsFilter/useItemsFilter';
import useCreateSidebarItems from '../../hooks/useCreateSidebarItems/useCreateSidebarItems';

import * as actionTypes from '../../store/actions/actionTypes';

import {translate} from '../../utils/translate';
import './ContentPage.css';

/* TODO: Вынести фильтрацию в хуки */
function ContentPage(props) {
    // eslint-disable-next-line no-unused-vars
    const [filteredItems, filterItems, availableFilters] = useItemsFilter(props.content);
    const sidebarItems = useCreateSidebarItems(availableFilters);
    //при первом рендере получить параметры запроса для фильтров если есть
    useEffect(() => {

        const filterParams = queryString.parse(props.location.search, { arrayFormat: 'comma' });

        if (filterParams.categories && Array.isArray(filterParams.categories)) {
            filterParams.categories.forEach(category => {

                if(availableFilters.categories.find(availableCategory => availableCategory === translate[category]))
                props.onAddCategory(translate[category]);

            })
        }

        else if(typeof filterParams.categories === 'string') {

            if(availableFilters.categories.find(availableCategory => availableCategory === translate[filterParams.categories]))
                props.onAddCategory(translate[filterParams.categories]);

        }
        
    // необходимо выполнить это только при первом рендере и данные для url там будут всегда
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    


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