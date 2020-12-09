import React from 'react'
import {Link} from 'react-router-dom';

import './CategoriesCard.css'

export default function CategoriesCard(props) {
    return (
        <Link to={props.to} className='CategoriesCard'>
            <div className='CategoriesCard_wrapper'>
                <div className='CategoriesCard_title-wrapper'>
                    <span className='CategoriesCard_title'>
                        {props.name}
                    </span>
                </div>
                <img src={props.img} alt='category' className='CategoriesCard_image'></img>
            </div>
        </Link>
    )
}
