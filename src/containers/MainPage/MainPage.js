import React from 'react'

import Carousel from '../../components/Carousel/Carousel';
import Benefits from '../../components/Benefits/Benefits';
import CategoriesCards from '../../components/UI/Cards/CategoriesCards/CategoriesCards';
import ItemsCards from '../../components/UI/Cards/ItemsCards/ItemsCards';

import smartphone from '../../assets/categories/smartphone.png';
import sveter from '../../assets/categories/sveter.png';
import laptop from '../../assets/categories/laptop.png';
import hat from '../../assets/categories/hat.png';
import headphones from '../../assets/categories/headphones.png';
import shoes from '../../assets/categories/shoes.png';
//двухмерный массив категорий (для распределения по строкам)
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
        name: 'some name1',
        image: 'url',
        price: 1000,
        price_before: 2000,
    },
    {
        name: 'some name2',
        image: 'url',
        price: 1500,
    },
    {
        name: 'some name3',
        image: 'url',
        price: 1030,
        price_before: 2000,
    },
    {
        name: 'some name4',
        image: 'url',
        price: 1000,
    },
    {
        name: 'some name1',
        image: 'url',
        price: 1000,
        price_before: 2000,
    },
    {
        name: 'some name2',
        image: 'url',
        price: 1500,
    },
    {
        name: 'some name3',
        image: 'url',
        price: 1030,
        price_before: 2000,
    },
    {
        name: 'some name4',
        image: 'url',
        price: 1000,
    },
]

export default function MainPage() {
    return (
        <div>
            <Carousel/>
            <Benefits/>
            <CategoriesCards categoriesData={categoriesData}/>
            <ItemsCards itemsData={itemsData}/>
        </div>
    )
}
