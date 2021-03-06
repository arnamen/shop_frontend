import React, { useContext, useState, useEffect } from 'react'
import { ReactReduxContext } from 'react-redux'
import { v4 } from 'uuid';
import cloneDeep from 'clone-deep';

import * as actionTypes from '../../store/actions/actionTypes';

import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Sidebar from '../../components/UI/Sidebar/Sidebar';

import { translate } from '../../utils/translate';

export default function useCreateSidebarItems(sidebarItemsDataOriginal) {

    const { store } = useContext(ReactReduxContext);
    const { getState, dispatch, subscribe } = store;
    const [storeState, setStoreState] = useState(getState());


    useEffect(() => subscribe(
        () => setStoreState(getState())
        , []))

    //содержимое сайдбара
    let sidebarItems = [];
    const updateSidebarItems = (sidebarItemsDataOriginal) => {
        let sidebarItemsData = cloneDeep(sidebarItemsDataOriginal);
        const sidebarItems = [];
        //созданиче чекбоксов для фильтров
        //категории фильтровать отдельно
        sidebarItems.push(<Sidebar.NavItem key={'categories'} title='Категории'>
            {sidebarItemsData.categories.map(
                (category, index) => {
                    const id = v4();
                    const categoryAlreadyInFilter = !!storeState.filters.categories.find(categoryInFilter => categoryInFilter === category);
                    return <Sidebar.Item key={v4()}>
                        <Checkbox
                            id={id}
                            checked={categoryAlreadyInFilter}

                            onChange={(e) => {

                                categoryAlreadyInFilter
                                    ? dispatch({
                                        type: actionTypes.REMOVE_CATEGORY,
                                        category: category
                                    }) //props.onRemoveCategory(category)
                                    : dispatch({
                                        type: actionTypes.ADD_CATEGORY,
                                        category: category
                                    });
                            }}>
                            {category}
                        </Checkbox>
                    </Sidebar.Item>
                }
            )}
        </Sidebar.NavItem>);
        //категории уже добавлены в сайдбар, так что удалить их
        delete sidebarItemsData.categories;
        //создать чекбоксы для фильтрации по тегам
        sidebarItems.push(...Object.keys(sidebarItemsData).map((filterName, index) => {
            return <Sidebar.NavItem key={'SidebarNavItem' + index} title={translate[filterName] || filterName}>
                {sidebarItemsData[filterName].map((filter, index) => {

                    let alreadyFiltered = null;
                    //проверка отмечен ли чекбокс
                    if (!storeState.filters.tagsFilters[filterName]) alreadyFiltered = false;
                    else if (!!storeState.filters.tagsFilters[filterName].find(filterString => filterString === filter)) alreadyFiltered = true;
                    else alreadyFiltered = false;

                    return <Sidebar.Item key={v4()} >

                        <Checkbox id={v4()}
                            checked={alreadyFiltered}
                            onChange={(e) => {
                                alreadyFiltered
                                    ? dispatch({
                                        type: actionTypes.REMOVE_FILTERS,
                                        filters: {
                                            [filterName]: [filter]
                                        }
                                    }) //props.onRemoveCategory(category)
                                    : dispatch({
                                        type: actionTypes.ADD_FILTERS,
                                        filters: {
                                            [filterName]: [filter]
                                        }
                                    });
                            }}>
                            {filter}
                        </Checkbox>

                    </Sidebar.Item>
                }
                )}
            </Sidebar.NavItem>
        }))
        return sidebarItems;
    }
    if(sidebarItems.length === 0) sidebarItems = updateSidebarItems(sidebarItemsDataOriginal);
    return [sidebarItems, updateSidebarItems];
}
