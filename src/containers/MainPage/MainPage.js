import React from 'react'
import { NavLink } from 'react-router-dom';

import Carousel from '../../components/Carousel/Carousel';
import Benefits from '../../components/Benefits/Benefits';
import CategoriesCards from '../../components/UI/Cards/CategoriesCards/CategoriesCards';
import ItemsCards from '../../components/UI/Cards/ItemsCards/ItemsCards';
import Tabs from '../Tabs/Tabs';
import GoodsList from '../../components/GoodsList/GoodsList';
import Footer from './../../components/Footer/footer';

import smartphone from '../../assets/categories/smartphone.png';
import sveter from '../../assets/categories/sveter.png';
import laptop from '../../assets/categories/laptop.png';
import hat from '../../assets/categories/hat.png';
import headphones from '../../assets/categories/headphones.png';
import shoes from '../../assets/categories/shoes.png';
//
import smartphone1_front from '../../assets/itemsCards/smartphone_1/front/smartphone1_front.jpg';
import smartphone1_back from '../../assets/itemsCards/smartphone_1/back/smartphone1_back.jpg';
import smartphone2_front from '../../assets/itemsCards/smartphone_2/front/smartphone2_front.png'
import smartphone2_back from '../../assets/itemsCards/smartphone_2/back/smartphone2_back.png'
import tv_1 from '../../assets/itemsCards/tv/1/tv_1.jpg';
import tv_2 from '../../assets/itemsCards/tv/2/tv_2.jpg';

import './MainPage.css';

//двухмерный массив категорий (для распределения по блокам)
const categoriesData = [
        {
            name: 'Свитеры',
            image: sveter,
            to: '/'
        },
        {
            name: 'шапки',
            image: hat,
            to: '/'
        },
        {
            name: 'обувь',
            image: shoes,
            to: '/'
        },
        {
            name: 'смартфоны',
            image: smartphone,
            to: '/'
        },
        {
            name: 'ноутбуки',
            image: laptop,
            to: '/'
        },
        {
            name: 'Наушники',
            image: headphones,
            to: '/'
        }
]

const itemsData = [
    {
        name: 'Мобильный телефон Samsung Galaxy M31s 6/128GB Blue',
        image_main: smartphone1_front,
        image_secondary: smartphone1_back,
        price: 1000,
        old_price: 1500,
        stars: 3,
        to: '/'
    },
    {
        name: 'Мобильный телефон Nokia 5.3 4/64GB DualSim Charcoal',
        image_main: smartphone2_front,
        image_secondary: smartphone2_back,
        price: 1500,
        stars: 5,
        to: '/'
    },
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 1030,
        old_price: 1400,
        stars: 4,
        to: '/'
    },
    {
        name: 'Мобильный телефон Samsung Galaxy M31s 6/128GB Blue',
        image_main: smartphone1_front,
        image_secondary: smartphone1_back,
        price: 1000,
        old_price: 1500,
        stars: 3,
        to: '/'
    },
    {
        name: 'Мобильный телефон Nokia 5.3 4/64GB DualSim Charcoal',
        image_main: smartphone2_front,
        image_secondary: smartphone2_back,
        price: 1500,
        stars: 5,
        to: '/'
    },
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 1030,
        old_price: 1400,
        stars: 4,
        to: '/'
    },    {
        name: 'Мобильный телефон Samsung Galaxy M31s 6/128GB Blue',
        image_main: smartphone1_front,
        image_secondary: smartphone1_back,
        price: 1000,
        old_price: 1500,
        stars: 3,
        to: '/'
    },
    {
        name: 'Мобильный телефон Nokia 5.3 4/64GB DualSim Charcoal',
        image_main: smartphone2_front,
        image_secondary: smartphone2_back,
        price: 1500,
        stars: 5,
        to: '/'
    },
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 1030,
        old_price: 1400,
        stars: 4,
        to: '/'
    },    
    {
        name: 'Мобильный телефон Samsung Galaxy M31s 6/128GB Blue',
        image_main: smartphone1_front,
        image_secondary: smartphone1_back,
        price: 1000,
        old_price: 1500,
        stars: 3,
        to: '/'
    },
    {
        name: 'Мобильный телефон Nokia 5.3 4/64GB DualSim Charcoal',
        image_main: smartphone2_front,
        image_secondary: smartphone2_back,
        price: 1500,
        stars: 5,
        to: '/'
    },
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 1030,
        old_price: 1400,
        stars: 4,
        to: '/'
    },
]

const itemsData_second = [
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 2030,
        old_price: 4400,
        stars: 4,
        to: '/'
    },
    {
        name: 'Мобильный телефон Samsung Galaxy M31s 6/128GB Blue',
        image_main: smartphone1_front,
        image_secondary: smartphone1_back,
        price: 1500,
        old_price: 1900,
        stars: 3,
        to: '/'
    },
    {
        name: 'Мобильный телефон Nokia 5.3 4/64GB DualSim Charcoal',
        image_main: smartphone2_front,
        image_secondary: smartphone2_back,
        price: 1550,
        stars: 5,
        to: '/'
    },
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 2030,
        old_price: 4400,
        stars: 4,
        to: '/'
    },
    {
        name: 'Мобильный телефон Samsung Galaxy M31s 6/128GB Blue',
        image_main: smartphone1_front,
        image_secondary: smartphone1_back,
        price: 1500,
        old_price: 1900,
        stars: 3,
        to: '/'
    },
    {
        name: 'Мобильный телефон Nokia 5.3 4/64GB DualSim Charcoal',
        image_main: smartphone2_front,
        image_secondary: smartphone2_back,
        price: 1550,
        stars: 5,
        to: '/'
    },
]

const phonesList = [
    {
        name: 'Мобильный телефон Samsung Galaxy M31s 6/128GB Blue',
        image_main: smartphone1_front,
        image_secondary: smartphone1_back,
        price: 1000,
        old_price: 1500,
        stars: 3,
        to: '/'
    },
    {
        name: 'Мобильный телефон Nokia 5.3 4/64GB DualSim Charcoal',
        image_main: smartphone2_front,
        image_secondary: smartphone2_back,
        price: 1500,
        stars: 5,
        to: '/'
    },
    {
        name: 'Мобильный телефон Samsung Galaxy M31s 6/128GB Blue',
        image_main: smartphone1_front,
        image_secondary: smartphone1_back,
        price: 1000,
        old_price: 1500,
        stars: 3,
        to: '/'
    },
    {
        name: 'Мобильный телефон Nokia 5.3 4/64GB DualSim Charcoal',
        image_main: smartphone2_front,
        image_secondary: smartphone2_back,
        price: 1500,
        stars: 5,
        to: '/'
    },
]

const tvList = [
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 1030,
        old_price: 1400,
        stars: 4,
        to: '/'
    },
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 1030,
        old_price: 1400,
        stars: 4,
        to: '/'
    },
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 1030,
        old_price: 1400,
        stars: 4,
        to: '/'
    },
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 1030,
        old_price: 1400,
        stars: 4,
        to: '/'
    },
]

const moreGoodsList = [
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 1030,
        old_price: 1400,
        stars: 4,
        to: '/'
    },    {
        name: 'Мобильный телефон Samsung Galaxy M31s 6/128GB Blue',
        image_main: smartphone1_front,
        image_secondary: smartphone1_back,
        price: 1000,
        old_price: 1500,
        stars: 3,
        to: '/'
    },
    {
        name: 'Мобильный телефон Nokia 5.3 4/64GB DualSim Charcoal',
        image_main: smartphone2_front,
        image_secondary: smartphone2_back,
        price: 1500,
        stars: 5,
        to: '/'
    },
    {
        name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
        image_main: tv_1,
        image_secondary: tv_2,
        price: 1930,
        stars: 4,
        to: '/'
    },   
]

export default function MainPage() {

    return (
        <div>
            <Carousel/>
            <Benefits/>
            <CategoriesCards categoriesData={categoriesData}/>
            <Tabs tabsNames={['Товар дня', 'Товары на главной']}>
                <ItemsCards itemsData={itemsData_second}/>
                <ItemsCards itemsData={itemsData}/>
            </Tabs>
            <div className='MainPage__viewAllGoods-wrapper'>
                <NavLink className='MainPage__viewAllGoods' to='/'>Посмотреть все товары</NavLink>
            </div>
            <GoodsList title='Только у нас' img='Star' data={phonesList}/>
            <GoodsList title='Популярно в категории "Телевизоры"' img='Chat' data={tvList}/>
            <GoodsList title='Больше товаров для выбора' img='General' data={moreGoodsList}/>
            <Footer/>
        </div>
    )
}
