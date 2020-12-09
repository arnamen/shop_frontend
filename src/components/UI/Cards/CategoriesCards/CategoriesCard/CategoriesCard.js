import React from 'react'

import './CategoriesCard.css'

export default function CategoriesCard(props) {
    return (
        <a href={props.to} className='CategoriesCard'>
            <div className='CategoriesCard_wrapper'>
                <div className='CategoriesCard_title-wrapper'>
                    <span className='CategoriesCard_title'>
                        {props.name}
                    </span>
                </div>
                <img src={props.img} alt='category' className='CategoriesCard_image'></img>
            </div>
        </a>
    )
}
