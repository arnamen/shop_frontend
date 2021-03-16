import React from 'react';

import ItemsCards from '../UI/Cards/ItemsCards/ItemsCards';

import classes from './GoodsList.module.css';

import ReactStar from '../../../public/assets/rating/stars/star_empty.svg';
import ReactGeneral from '../../../public/assets/misc/menu.svg';
import ReactView from '../../../public/assets/misc/view.svg';
import ReactChat from '../../../public/assets/misc/chat.svg';

const TitleImg = {
    Star: ReactStar,
    General: ReactGeneral,
    View: ReactView,
    Chat: ReactChat
}

const GoodsList = ( props ) => {

    const Icon = TitleImg[props.img];

    return (
        <div className={classes.GoodsList}>
            <div className={classes['GoodsList__title-wrapper']}>
                {Icon && <Icon className={classes['GoodsList__title-image']} height='25px' width='25px' fill='#eb600a'/>}
                <div className={classes.GoodsList__title}>
                    {props.title}
                </div>
            </div>
            <ItemsCards itemsData={props.data}/>
        </div>
    );
}

export default GoodsList;
