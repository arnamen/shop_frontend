import React from 'react'
import { connect } from 'react-redux';
import Tabs from '../../containers/Tabs/Tabs';

import ItemPageGeneral from './ItemPageGeneral/ItemPageGeneral';
import ItemPageCharacteristics from './ItemPageCharacteristics/ItemPageCharacteristics';

import './ItemPage.css';
import * as actionTypes from '../../store/actions/actionTypes';

function ItemPage(props) {

    const itemId = props.location.pathname.split('/').pop();
    const itemData = props.content.filter(item => item.id.toLowerCase() === itemId)[0];
    const compared = !!props.compare.find(item => item.name === itemData.name);
    const favored = !!props.favourites.find(item => item.name === itemData.name);

    return (
        <div className='ItemPage'>
            <Tabs tabsNames={['Осноная информация', 'TEST']}>
                <div>
                <ItemPageGeneral 
                itemData={itemData}
                compared={compared}
                favored={favored}
                onAddToCompare={props.onAddToCompare}
                onRemoveFromCompare={props.onRemoveFromCompare}
                onAddToFavourites={props.onAddToFavorites}
                onRemoveFromFavourites={props.onRemoveFromFavourites}/>
                </div>
                <div>
                <ItemPageCharacteristics/>
                </div>
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