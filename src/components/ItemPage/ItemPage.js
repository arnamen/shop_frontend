import React from 'react'
import { connect } from 'react-redux';
import ImageGallery from 'react-image-gallery';

import * as actionTypes from '../../store/actions/actionTypes';

import './ItemPage.css';

function ItemPage( props ) {

    const itemId = props.location.pathname.split('/').pop();

    const itemData = props.content.filter(item => item.id.toLowerCase() === itemId)[0];
    
    const imagesData = [];

    imagesData.push({
        original: itemData.image_main,
        thumbnail: itemData.image_main,
    });
    imagesData.push({
        original: itemData.image_secondary,
        thumbnail: itemData.image_secondary,
    });

    return (
        <div className='ItemPage__wrapper'>
            <div className='ItemPage__carousel'>
                <ImageGallery items={imagesData} 
                showFullscreenButton={false} 
                showPlayButton={false}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
    };
}

export default connect(mapStateToProps)(ItemPage)