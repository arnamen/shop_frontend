import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { useRouter } from 'next/router'

import Tabs from '../../containers/Tabs/Tabs';

import ItemPageGeneral from '../../components/ItemPage/ItemPageGeneral';
import ItemPageCharacteristics from '../../components/ItemPage/ItemPageCharacteristics';

import classes from './ItemPage.module.css';
import * as actionTypes from '../../store/actions/actionTypes';
import { updateContent } from '../../store/actions/items';

function ItemPage(props) {

    const router = useRouter();
    const { itemid } = router.query;

    useEffect(() => {
        if(props.content.length === 0) props.onUpdateContent();
    }, [])

    if(props.content.length === 0) return (<div>Loading...</div>)
    //get find item in fetched items
    const itemData = props.content.filter(item => item.id.toLowerCase() === itemid)[0];
    if(!itemData) {
        alert("unable to get item");
        return <div></div>
    };
    //check if item added to compare
    const compared = !!props.compare.find(item => item.name === itemData.name);
    //check if item added to favourites
    const favored = !!props.favourites.find(item => item.name === itemData.name);
    //check if item added to cart
    const inCart = !!props.cart.find(item => item.name === itemData.name);

    return (
        <div className={classes.ItemPage}>
            <Tabs tabsNames={['Осноная информация', 'Характеристики']}>
                <div>
                <ItemPageGeneral 
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