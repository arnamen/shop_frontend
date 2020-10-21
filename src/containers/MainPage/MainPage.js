import React from 'react'

import Carousel from '../../components/Carousel/Carousel';
import Benefits from '../../components/Benefits/Benefits';
import CategoriesCards from '../../components/UI/Cards/CategoriesCards/CategoriesCards';

import smartphone from '../../assets/categories/smartphone.png';
import sveter from '../../assets/categories/sveter.png';
import laptop from '../../assets/categories/laptop.png';
import hat from '../../assets/categories/hat.png';
import headphones from '../../assets/categories/headphones.png';
import shoes from '../../assets/categories/shoes.png';
//двухмерный массив категорий (для распределения по строкам)
const categoriesData = [
    [
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
    ],
    [
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
]

export default function MainPage() {
    return (
        <div>
            <Carousel/>
            <Benefits/>
            <CategoriesCards categoriesData={categoriesData}/>
        </div>
    )
}
