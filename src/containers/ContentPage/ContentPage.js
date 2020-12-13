import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import queryString from 'query-string';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {v4} from 'uuid';

import Sidebar from '../../components/UI/Sidebar/Sidebar';
import ItemsCards from '../../components/UI/Cards/ItemsCards/ItemsCards';
import '../../components/UI/Checkbox/Checkbox';

import useItemsFilter from '../../hooks/useItemsFilter/useItemsFilter';
import useCreateSidebarItems from '../../hooks/useCreateSidebarItems/useCreateSidebarItems';

import * as actionTypes from '../../store/actions/actionTypes';

import { translate } from '../../utils/translate';
import './ContentPage.css';


/* TODO: Вынести фильтрацию в хуки */
function ContentPage(props) {
    // eslint-disable-next-line no-unused-vars
    const [filteredItems, filterItems, availableFilters] = useItemsFilter(props.content);
    const sidebarItems = useCreateSidebarItems(availableFilters);
    
    const content = filterItems(props.content);
    const minPrice = content.reduce((curMin,cur) => curMin.price > cur.price ? cur : curMin).price;
    const maxPrice = content.reduce((curMax,cur) => curMax.price < cur.price ? cur : curMax).price;
    const [priceRange, setPriceRange] = React.useState([minPrice, maxPrice]);
    const [sliderPriceRange, setSliderPriceRange] = React.useState([minPrice, maxPrice]);
    let inputMinRef = useRef();
    let inputMaxRef = useRef();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    //при первом рендере получить параметры запроса для фильтров если есть
    useEffect(() => {

        const filterParams = queryString.parse(props.location.search, { arrayFormat: 'comma' });

        if (filterParams.categories && Array.isArray(filterParams.categories)) {
            filterParams.categories.forEach(category => {

                if (availableFilters.categories.find(availableCategory => availableCategory === translate[category]))
                    props.onAddCategory(translate[category]);

            })
        }

        else if (typeof filterParams.categories === 'string') {

            if (availableFilters.categories.find(availableCategory => availableCategory === translate[filterParams.categories]))
                props.onAddCategory(translate[filterParams.categories]);

        }

        // необходимо выполнить это только при первом рендере и данные для url там будут всегда
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='ContentPage'>
            <div className='ContentPage__sidebar-wrapper'>
                <Sidebar title='Фильтры'>
                    <Sidebar.NavItem title='Цена'>
                        <Sidebar.Item>
                            <Slider
                                className='ContentPage__price-slider'
                                value={sliderPriceRange}
                                onChangeCommitted={(event, newValue) => {
                                    inputMinRef.current.value = newValue[0];
                                    inputMaxRef.current.value = newValue[1];
                                    setPriceRange(newValue)
                                }}
                                onChange={(event, newValue) => setSliderPriceRange(newValue)}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={() => { }}
                                min={minPrice}
                                max={maxPrice}
                            />
                        </Sidebar.Item>
                        <Sidebar.Item>
                            <div className='ContentPage__price-range'>
                                <div className='ContentPage__price-min'>
                                    <label htmlFor='ContentPage__price-min__input'>От:</label>
                                    <input type='text' key={'input_min'} id='ContentPage__price-min__input' 
                                    ref={inputMinRef}
                                    placeholder={`${priceRange[0]}₴`}
                                    onFocus={(event) => event.target.value=''}
                                    onChange={(event) => {
                                        const regexp = new RegExp('(?!([0-9])|$)', 'g');
                                        const isValid = !regexp.test(event.target.value);
                                        if(isValid) setPriceRange([+event.target.value, priceRange[1]]);
                                        else event.target.value = priceRange[0]+'₴';
                                    }}/>
                                </div>
                                <div className='ContentPage__price-max'>
                                    <label htmlFor='ContentPage__price-max__input'>До:</label>
                                    <input type='text' key={'input_max'} id='ContentPage__price-max__input'
                                    ref={inputMaxRef} 
                                    placeholder={`${priceRange[1]}₴`}
                                    onFocus={(event) => event.target.value = ''}
                                    onChange={(event) => {
                                        const regexp = new RegExp('(?!([0-9])|$)', 'g');
                                        const isValid = !regexp.test(event.target.value);
                                        if(isValid) setPriceRange([priceRange[0], +event.target.value]);
                                        else event.target.value = priceRange[1]+'₴';
                                    }}
                                    />
                                </div>
                            </div>
                        </Sidebar.Item>
                    </Sidebar.NavItem>
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