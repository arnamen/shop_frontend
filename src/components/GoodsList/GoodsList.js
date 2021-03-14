import React from 'react';

import ItemsCards from '../UI/Cards/ItemsCards/ItemsCards';

import classes from './GoodsList.module.css';

import {ReactComponent as ReactStar} from '../../../public/assets/rating/stars/star_empty.svg';
import {ReactComponent as ReactGeneral} from '../../../public/assets/misc/menu.svg';
import {ReactComponent as ReactView} from '../../../public/assets/misc/view.svg';
import {ReactComponent as ReactChat} from '../../../public/assets/misc/chat.svg';

const TitleImg = {
    Star: ReactStar,
    General: ReactGeneral,
    View: ReactView,
    Chat: ReactChat
}

const GoodsList = ( props ) => {

    const Icon = TitleImg[props.img] || React.Fragment;

    return (
        <div className={classes.GoodsList}>
            <div className={classes['GoodsList__title-wrapper']}>
                <Icon className={classes['GoodsList__title-image']} height='25px' width='25px' fill='#eb600a'/>
                <div className={classes.GoodsList__title}>
                    {props.title}
                </div>
            </div>
            <ItemsCards itemsData={props.data}/>
        </div>
    );
}

export default GoodsList;
