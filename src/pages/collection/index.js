import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import Slider from '@material-ui/core/Slider';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {useRouter} from 'next/router';
import queryString from 'query-string';

import Sidebar from '../../components/UI/Sidebar/Sidebar';
import ItemsCards from '../../components/UI/Cards/ItemsCards/ItemsCards';
import Button from '../../components/UI/Button/Button';

import ReactFilter from '../../../public/assets/misc/filter.svg';

import useItemsFilter from '../../hooks/useItemsFilter/useItemsFilter';
import useCreateSidebarItems from '../../hooks/useCreateSidebarItems/useCreateSidebarItems';

import * as actionTypes from '../../store/actions/actionTypes';

import { translate } from '../../utils/translate';

import classesCheckbox from './../../components/UI/Checkbox/Checkbox';
import classesContentPage from './ContentPage.module.css';

import { updateContent } from '../../store/actions/items';

const classes = {...classesCheckbox, ...classesContentPage};

function ContentPage(props) {
    // eslint-disable-next-line no-unused-vars
    const [filteredItems, filterItems, availableFilters, updateFilters] = useItemsFilter(props.content);
    const [sidebarItems, updateSidebarItems] = useCreateSidebarItems(availableFilters);
    const [sortingOrder, setSotringOrder] = useState('default');
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const router = useRouter();

    let content = filterItems(props.content);

    const minPrice = content.length > 0 ? content.reduce((curMin, cur) => curMin.price > cur.price ? cur : curMin).price : 0;
    const maxPrice = content.length > 0 ? content.reduce((curMax, cur) => curMax.price < cur.price ? cur : curMax).price : 0;

    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [sliderPriceRange, setSliderPriceRange] = useState([minPrice, maxPrice]);

    useEffect(() => {
        const minPrice = props.content.length > 0 ? props.content.reduce((curMin, cur) => curMin.price > cur.price ? cur : curMin).price : 0;
        const maxPrice = props.content.length > 0 ? props.content.reduce((curMax, cur) => curMax.price < cur.price ? cur : curMax).price : 0;
        setPriceRange([minPrice, maxPrice])
    }, [props.content])

    useEffect(() => {
        if(showMobileFilters) disableBodyScroll(document.querySelector('.Sidebar__wrapper') || <React.Fragment></React.Fragment>);
        else enableBodyScroll(document.querySelector('.Sidebar__wrapper') || <React.Fragment></React.Fragment>)
    }, [showMobileFilters])

    useEffect(() => {
        updateFilters(props.content);
    }, [updateFilters, props.content]);
    content = content.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);

    let inputMinRef = useRef();
    let inputMaxRef = useRef();

    
    if (sortingOrder !== 'default')
        switch (sortingOrder) {
            case 'name':
                content = content.sort((item1, item2) => {
                    if (item1.name < item2.name) return -1;
                    else if (item1.name > item2.name) return 1;
                    else return 0;
                });
                break;
            case 'popular':
                content = content.sort((item1, item2) => {
                    if (item1.stars > item2.stars) return -1;
                    else if (item1.stars < item2.stars) return 1;
                    else return 0;
                });
                break;
            case 'price-asc':
                content = content.sort((item1, item2) => {
                    if (item1.price < item2.price) return -1;
                    else if (item1.price > item2.price) return 1;
                    else return 0;
                });
                break;
            case 'price-desc':
                content = content.sort((item1, item2) => {
                    if (item1.price > item2.price) return -1;
                    else if (item1.price < item2.price) return 1;
                    else return 0;
                });
                break;
            default:
                break;
        }

    //при первом рендере получить параметры запроса для фильтров если есть
    useEffect(() => {
        //get params and split them ("?" is a separator)
        const filterParams = queryString.parse(router.asPath.split('?')[1], { arrayFormat: 'comma' });

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

    useEffect(() => {
        if(props.content.length === 0) props.onUpdateContent();
        const minPrice = props.content.length > 0 ? props.content.reduce((curMin, cur) => curMin.price > cur.price ? cur : curMin).price : 0;
        const maxPrice = props.content.length > 0 ? props.content.reduce((curMax, cur) => curMax.price < cur.price ? cur : curMax).price : 0;
        setPriceRange([minPrice, maxPrice])
    }, []);

    return (
        <div className={classes.ContentPage}>
            <div className={`${classes['ContentPage__sidebar-wrapper']} ${!showMobileFilters && classes['ContentPage__mobile-filters-hide']}`}
            onClick={() => setShowMobileFilters(false)}>
                <Sidebar title='Фильтры'>
                    <Sidebar.NavItem title='Цена'>
                        <Sidebar.Item>
                            <Slider
                                className={classes['ContentPage__price-slider']}
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
                            <div className={classes['ContentPage__price-range']}>
                                <div className={classes['ContentPage__price-min']}>
                                    <label htmlFor={classes['ContentPage__price-min__input']}>От:</label>
                                    <input type='text' key={'input_min'} id={classes['ContentPage__price-min__input']}
                                        ref={inputMinRef}
                                        placeholder={`${priceRange[0]}₴`}
                                        onFocus={(event) => event.target.value = ''}
                                        onChange={(event) => {
                                            const regexp = new RegExp('(?!([0-9])|$)', 'g');
                                            const isValid = !regexp.test(event.target.value);
                                            if (isValid) setPriceRange([+event.target.value, priceRange[1]]);
                                            else event.target.value = priceRange[0] + '₴';
                                        }} />
                                </div>
                                <div className={classes['ContentPage__price-max']}>
                                    <label htmlFor='ContentPage__price-max__input'>До:</label>
                                    <input type='text' key={'input_max'} id={classes['ContentPage__price-max__input']}
                                        ref={inputMaxRef}
                                        placeholder={`${priceRange[1]}₴`}
                                        onFocus={(event) => event.target.value = ''}
                                        onChange={(event) => {
                                            const regexp = new RegExp('(?!([0-9])|$)', 'g');
                                            const isValid = !regexp.test(event.target.value);
                                            if (isValid) setPriceRange([priceRange[0], +event.target.value]);
                                            else event.target.value = priceRange[1] + '₴';
                                        }}
                                    />
                                </div>
                            </div>
                        </Sidebar.Item>
                    </Sidebar.NavItem>
                    {sidebarItems}
                </Sidebar>
            </div>
            <div className={classes.ContentPage__content}>
                <h2 className={classes.ContentPage__title}>Товары на главной</h2>
                <div className={classes.ContentPage__order}>
                        <Button className={classes['ContentPage__mobile-filters']} onClick={() => setShowMobileFilters(true)}>
                            <ReactFilter className={classes['ContentPage__mobile-filters__icon']} viewBox="0 0 512 512"/>
                            <span>Фильтр товаров</span>
                            </Button>
                        <span className={classes['ContentPage__order-select-text']}>Сортировать:</span>
                        <select name="ContentPage__order-select"
                            className={classes["ContentPage__order-select"]}
                            onChange={(event) => {
                                setSotringOrder(event.target.value);
                            }} defaultValue='default'>
                            <option value="default">По умолчанию</option>
                            <option value="name">По названию</option>
                            <option value="popular">По популярности</option>
                            <option value="price-asc">По возрастанию цены</option>
                            <option value="price-desc">По убыванию цены</option>
                        </select>

                </div>
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
        }),
        onUpdateContent: () => dispatch(updateContent())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage)