import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Tabs from '../../containers/Tabs/Tabs';

import ItemPageGeneral from './ItemPageGeneral/ItemPageGeneral';
import ItemPageCharacteristics from './ItemPageCharacteristics/ItemPageCharacteristics';

import './ItemPage.css';
import * as actionTypes from '../../store/actions/actionTypes';
import { updateContent } from '../../store/actions/items';

function ItemPage(props) {

    useEffect(() => {
        if(props.content.length === 0) props.onUpdateContent();
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    if(props.content.length === 0) return (<div>Loading...</div>)

    const itemId = props.location.pathname.split('/').pop();
    const itemData = props.content.filter(item => item.id.toLowerCase() === itemId)[0];
    const compared = !!props.compare.find(item => item.name === itemData.name);
    const favored = !!props.favourites.find(item => item.name === itemData.name);
    const inCart = !!props.cart.find(item => item.name === itemData.name);

    return (
        <div className='ItemPage'>
            <Tabs tabsNames={['Осноная информация', 'Характеристики']}>
                <div>
                <ItemPageGeneral 
                itemData={itemData}
                compared={compared}
                favored={favored}
                onAddToCompare={props.onAddToCompare}
                onRemoveFromCompare={props.onRemoveFromCompare}
                onAddToFavorites={props.onAddToFavorites}
                onRemoveFromFavourites={props.onRemoveFromFavourites}/>
                </div>
                <div>
                <ItemPageCharacteristics 
                itemData={itemData}
                compared={compared}
                favored={favored}
                inCart={inCart}
                onAddToCompare={props.onAddToCompare}
                onRemoveFromCompare={props.onRemoveFromCompare}
                onAddToFavorites={props.onAddToFavorites}
                onRemoveFromFavourites={props.onRemoveFromFavourites}
                onAddToCart={props.onAddToCart}
                onRemoveFromCart={props.onRemoveFromCart}/>
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
        onAddToCart: (item) => dispatch({
            type: actionTypes.ADD_TO_CART,
            item,
        }),
        onRemoveFromCart: (item) => dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            item,
        }),
        onUpdateContent: () => dispatch(updateContent())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage)