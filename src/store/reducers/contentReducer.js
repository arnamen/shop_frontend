import * as actionTypes from '../actions/actionTypes';

import smartphone1_front from '../../assets/itemsCards/smartphone_1/front/smartphone1_front.jpg';
import smartphone1_back from '../../assets/itemsCards/smartphone_1/back/smartphone1_back.jpg';
import smartphone2_front from '../../assets/itemsCards/smartphone_2/front/smartphone2_front.png'
import smartphone2_back from '../../assets/itemsCards/smartphone_2/back/smartphone2_back.png'
import tv_1 from '../../assets/itemsCards/tv/1/tv_1.jpg';
import tv_2 from '../../assets/itemsCards/tv/2/tv_2.jpg';

const iniialState = {
    content: [
        {
            name: 'Мобильный телефон Samsung Galaxy M31s 6/128GB Blue',
            categories: ['phones', 'smartphones'],
            image_main: smartphone1_front,
            image_secondary: smartphone1_back,
            price: 1000,
            old_price: 1500,
            stars: 3,
            to: '/'
        },
        {
            name: 'Мобильный телефон Nokia 5.3 4/64GB DualSim Charcoal',
            categories: ['phones', 'smartphones'],
            image_main: smartphone2_front,
            image_secondary: smartphone2_back,
            price: 1500,
            stars: 5,
            to: '/'
        },    
        {
            name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
            categories: ['tv'],
            image_main: tv_1,
            image_secondary: tv_2,
            price: 1030,
            old_price: 1400,
            stars: 4,
            to: '/'
        },
    ]
}

const reducer = (state = iniialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default reducer;