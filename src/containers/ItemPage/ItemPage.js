import React from 'react'
import { connect } from 'react-redux';
import Tabs from '../../containers/Tabs/Tabs';

import './ItemPage.css';
import ItemPageGeneral from './ItemPageGeneral/ItemPageGeneral';
import Button from '../../components/UI/Button/Button';

import * as actionTypes from '../../store/actions/actionTypes';

function ItemPage(props) {

    return (
        <div className='ItemPage'>
            <Tabs tabsNames={['Осноная информация', 'TEST']}>
                <div>
                <ItemPageGeneral 
                content={props.content} 
                cart={props.cart}
                compare={props.compare}
                favourites={props.favourites}
                location={props.location}
                onAddToCompare={props.onAddToCompare}
                onRemoveFromCompare={props.onRemoveFromCompare}
                onAddToFavourites={props.onAddToFavorites}
                onRemoveFromFavourites={props.onRemoveFromFavourites}
                />
                </div>
                <Button className='test'>TEST</Button>
            </Tabs>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
        cart: state.cart.cart,
        compare: state.compare.compare,
        favourites: state.favourites.favourites,
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCompare: (item) => dispatch({
            type: actionTypes.ADD_COMPARE,
            item,
        }),
        onRemoveFromCompare: (item) => dispatch({
            type: actionTypes.REMOVE_COMPARE,
            item,
        }),
        onAddToFavorites: (item) => dispatch({
            type: actionTypes.ADD_FAVOURITES,
            item,
        }),
        onRemoveFromFavourites: (item) => dispatch({
            type: actionTypes.REMOVE_FAVOURITES,
            item,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage)