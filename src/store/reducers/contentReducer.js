

import smartphone1_front from '../../assets/itemsCards/smartphone_1/front/smartphone1_front.jpg';
import smartphone1_back from '../../assets/itemsCards/smartphone_1/back/smartphone1_back.jpg';
import smartphone2_front from '../../assets/itemsCards/smartphone_2/front/smartphone2_front.png'
import smartphone2_back from '../../assets/itemsCards/smartphone_2/back/smartphone2_back.png'
import tv_1 from '../../assets/itemsCards/tv/1/tv_1.jpg';
import tv_2 from '../../assets/itemsCards/tv/2/tv_2.jpg';

import * as actionTypes from '../actions/actionTypes';

const initialState = {
    content: [/* 
        {
            name: 'Мобильный телефон Samsung Galaxy M31s 6/128GB Blue',
            categories: ['Телефоны', 'Смартфоны'],
            tags: {
                diagonal: '6.5"',
                battery: '6000mah',
                processor: 'exynous9611',
                OS: 'Android 10',
                RAM: '6 ГБ',
                storageCapacity: '128 ГБ',
                camera: '64 Мп',
                frontCamera: '32 Мп'
            },
            images: [smartphone1_front,smartphone1_back],
            price: 1000,
            old_price: 1500,
            stars: 3,
            to: '/',
            id: 'Samsung-Galaxy-M31s',
            labels: ['new', 'popular'],
            inStock: true,
            description: `Экран (6.5", Super AMOLED, 2400х1080) 
            / Samsung Exynos 9611 (4 x 2.3 ГГц + 4 x 1.7 ГГц) 
            / основная квадро-камера: 64 Мп + 12 Мп + 5 Мп + 5 Мп, фронтальная 32 Мп 
            / RAM 6 ГБ 
            / 128 ГБ встроенной памяти + microSD (до 512 ГБ) 
            / 3G / LTE / GPS 
            / поддержка 2х SIM-карт (Nano-SIM) 
            / Android 10 
            / 6000 мА*ч`
        },
        {
            name: 'Мобильный телефон Nokia 5.3 4/64GB DualSim Charcoal',
            categories: ['Телефоны', 'Смартфоны'],
            tags: {
                diagonal: '6.55"',
                battery: '4000mah',
                processor: 'snapdragon655',
                OS: 'Android 10',
                RAM: '4 ГБ',
                storageCapacity: '64 ГБ',
                camera: '13 Мп',
                frontCamera: '8 Мп'
            },
            images: [smartphone2_front, smartphone2_back],
            price: 1500,
            stars: 5,
            id: 'Nokia-5.3-DualSim-Charcoal',
            labels: ['popular'],
            inStock: false,
            description: `Экран (6.55", 1600x720) 
            / Qualcomm Snapdragon 665 (2.0 ГГц) 
            / основная квадро-камера: 13 Мп + 5 Мп + 2 Мп + 2 Мп, фронтальная камера: 8 Мп 
            / RAM 4 ГБ / 64 ГБ встроенной памяти + microSD (до 512 ГБ) 
            / 3G / LTE / GPS 
            / поддержка 2х СИМ-карт (Nano-SIM) 
            / Android 10 
            / 4000 мА*ч`
        },
        {
            name: 'Телевизор Xiaomi Mi LED TV 4A 32"',
            categories: ['Телевизоры'],
            tags: {
                diagonal: '32"',
                resolution: '1366x768',
                frequency: '60ghz',
                smartPlatform: 'Android'
            },
            images: [tv_1, tv_2],
            price: 1030,
            old_price: 1400,
            stars: 4,
            id: 'Xiaomi-Mi-LED-TV-4A-32',
            labels: ['new'],
            inStock: true,
            description: 'useTags'
        }, */
    ],
    loading: false,
    error: null
}

const contentRetrieveStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const contentRetrieveSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        error: null,
        content: action.content
    }
}

const contentRetrieveFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CONTENT_RETRIEVE_START: return contentRetrieveStart(state, action);
        case actionTypes.CONTENT_RETRIEVE_SUCCESS: return contentRetrieveSuccess(state, action);
        case actionTypes.CONTENT_RETRIEVE_FAIL: return contentRetrieveFail(state, action);
        default:
            return state;
    }
}

export default reducer;