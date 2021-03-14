import React from 'react'
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes';
import ItemsCards from '../UI/Cards/ItemsCards/ItemsCards';

import {ReactComponent as ReactFavouritesEmpty} from '../../../public/assets/account/heart.svg';

import classes from './Favourites.module.css';

function Favourites( props ) {

    const content = props.favourites.length > 0 
    ? <ItemsCards itemsData={props.favourites}/>
    : <div className={classes['Favourites__empty-wrapper']}>
        <ReactFavouritesEmpty viewBox="0 0 512 512" className={classes['Favourites__empty-img']}/>
        <p>В вашем избранном пока пусто</p>
    </div>

    return (
        <div className={classes.Favourites}>
            <h1 className={classes.Favourites__title}>Избранное</h1>
            {content}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        favourites: state.favourites.favourites,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveFromFavourites: (item) => dispatch({
            type: actionTypes.REMOVE_FAVOURITES,
            item,
        }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favourites)