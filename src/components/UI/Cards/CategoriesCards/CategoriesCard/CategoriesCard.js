import React from 'react'

import './CategoriesCard.css'

export default function CategoriesCard( props ) {
    return (
        <div href={props.to} className='CategoriesCard' onClick={() => {window.location.href = props.to}}>
                <div className='CategoriesCard_title-wrapper'>
                    <span className='CategoriesCard_title'>
                        {props.name}
                    </span>
                </div>
                <div className='CategoriesCard_image-wrapper'>
                    <img src={props.img} alt='category' className='CategoriesCard_image'></img>
                </div>
        </div>
    )
}
