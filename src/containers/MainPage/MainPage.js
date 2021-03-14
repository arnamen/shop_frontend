import React from 'react'
import { Link } from 'next/router';

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

import './MainPage.css';
import { connect } from 'react-redux';

/**
 * TODO:
 * add custom NavLink
 */

//массив категорий
const href = '/page/collection';
const categoriesData = [
    {
        name: 'Свитеры',
        image: sveter,
        to: href
    },
    {
        name: 'шапки',
        image: hat,
        to: href
    },
    {
        name: 'обувь',
        image: shoes,
        to: href
    },
    {
        name: 'смартфоны',
        image: smartphone,
        to: href + '?categories=phones'
    },
    {
        name: 'ноутбуки',
        image: laptop,
        to: href
    },
    {
        name: 'Наушники',
        image: headphones,
        to: href
    }
]

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function MainPage(props) {

    const content_tab1 = []
    const itemsAmount_tab1 = randomInteger(3, 10);
    const content_tab2 = []
    const itemsAmount_tab2 = randomInteger(3, 10);

    let phones = [];
    let tv = [];
    //добавить карточкуи с товарами в табы
    if (props.content.length > 0) {
        tv = props.content.filter(item => item.categories.includes('Телевизоры'));
        tv.push(...tv); //заполнить строку для красоты
        phones = props.content.filter(item => item.categories.includes('Телефоны'));
        phones.push(...phones); //заполнить строку для красоты
        for (let i = 0; i < itemsAmount_tab1; i++) content_tab1.push(props.content[i % (props.content.length)]);
        for (let i = 0; i < itemsAmount_tab2; i++) content_tab2.push(props.content[i % (props.content.length)]);
    }
    return (
        <div>
            <Carousel />
            <Benefits />
            <CategoriesCards categoriesData={categoriesData} />
            <Tabs tabsNames={['Товар дня', 'Товары на главной']}>
                <ItemsCards itemsData={content_tab1} />
                <ItemsCards itemsData={content_tab2} />
            </Tabs>
            <div className='MainPage__viewAllGoods-wrapper'>
                <Link className='MainPage__viewAllGoods' href='/page/collection'><span>Посмотреть все товары</span></Link>
            </div>
            <GoodsList title='Только у нас' img='Star' data={phones} />
            <GoodsList title='Популярно в категории "Телевизоры"' img='Chat' data={tv} />
            <GoodsList title='Больше товаров для выбора' img='General' data={content_tab2} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
    };
}

export default connect(mapStateToProps)(MainPage)