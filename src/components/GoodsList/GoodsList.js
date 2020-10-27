import React from 'react';

import ItemsCards from '../UI/Cards/ItemsCards/ItemsCards';

import './GoodsList.css';

import {ReactComponent as ReactStar} from '../../assets/rating/stars/star_empty.svg';
import {ReactComponent as ReactGeneral} from '../../assets/misc/menu.svg';
import {ReactComponent as ReactView} from '../../assets/misc/view.svg';
import {ReactComponent as ReactChat} from '../../assets/misc/chat.svg';

const TitleImg = {
    Star: ReactStar,
    General: ReactGeneral,
    View: ReactView,
    Chat: ReactChat
}

const GoodsList = ( props ) => {

    const Icon = TitleImg[props.img] || React.Fragment;

    return (
        <div className='GoodsList'>
            <div className='GoodsList__title-wrapper'>
                <Icon className='GoodsList__title-image' height='25px' width='25px' fill='#eb600a'/>
                <div className='GoodsList__title'>
                    {props.title}
                </div>
            </div>
            <ItemsCards itemsData={props.data}/>
        </div>
    );
}

export default GoodsList;
