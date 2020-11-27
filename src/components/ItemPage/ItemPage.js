import React from 'react'
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes';

import './ItemPage.css';

function ItemPage( props ) {

    const itemId = props.location.pathname.split('/').pop();

    const itemData = props.content.filter(item => item.id.toLowerCase() === itemId)[0];
    console.log(itemData)
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
    };
}

export default connect(mapStateToProps)(ItemPage)