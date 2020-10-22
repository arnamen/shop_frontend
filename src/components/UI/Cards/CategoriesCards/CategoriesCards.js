import React from 'react'
import { v4 } from 'uuid';
import CategoriesCard from './CategoriesCard/CategoriesCard';

import './CategoriesCards.css';

export default function CategoriesCards( props ) {
    let categories;
    if(props.categoriesData && props.categoriesData.length) {
        categories = props.categoriesData.map((CategoryCardData) => {
        
        return  <CategoriesCard to={CategoryCardData.to} img={CategoryCardData.image} name={CategoryCardData.name}/>;
        })
    }

    return (
        <div className='CategoriesCards-wrapper'>
            {categories}
        </div>
    )
}
