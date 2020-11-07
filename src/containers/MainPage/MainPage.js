import React from 'react'
import { NavLink } from 'react-router-dom';

import Carousel from '../../components/Carousel/Carousel';
import Benefits from '../../components/Benefits/Benefits';
import CategoriesCards from '../../components/UI/Cards/CategoriesCards/CategoriesCards';
import ItemsCards from '../../components/UI/Cards/ItemsCards/ItemsCards';
import Tabs from '../Tabs/Tabs';
import GoodsList from '../../components/GoodsList/GoodsList';

import smartphone from '../../assets/categories/smartphone.png';
import sveter from '../../assets/categories/sveter.png';
import laptop from '../../assets/categories/laptop.png';
import hat from '../../assets/categories/hat.png';
import headphones from '../../assets/categories/headphones.png';
import shoes from '../../assets/categories/shoes.png';
//

import './MainPage.css';
import { connect } from 'react-redux';

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

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

function MainPage( props ) {

    const content_tab1 = []
    const itemsAmount_tab1 = randomInteger(3,10);
    const content_tab2 = []
    const itemsAmount_tab2 = randomInteger(3,10);

    const phones = props.content.filter(item => item.categories.includes('phones'));
    const tv = props.content.filter(item => item.categories.includes('tv'));

    for (let i = 0; i < itemsAmount_tab1; i++) content_tab1.push(props.content[i % (props.content.length)]);
    for (let i = 0; i < itemsAmount_tab2; i++) content_tab2.push(props.content[i % (props.content.length)]);
    return (
        <div>
            <Carousel/>
            <Benefits/>
            <CategoriesCards categoriesData={categoriesData}/>
            <Tabs tabsNames={['Товар дня', 'Товары на главной']}>
                <ItemsCards itemsData={content_tab1}/>
                <ItemsCards itemsData={content_tab2}/>
            </Tabs>
            <div className='MainPage__viewAllGoods-wrapper'>
                <NavLink className='MainPage__viewAllGoods' to='/'>Посмотреть все товары</NavLink>
            </div>
            <GoodsList title='Только у нас' img='Star' data={phones}/>
            <GoodsList title='Популярно в категории "Телевизоры"' img='Chat' data={tv}/>
            <GoodsList title='Больше товаров для выбора' img='General' data={content_tab2}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
    };
}

export default connect(mapStateToProps)(MainPage)