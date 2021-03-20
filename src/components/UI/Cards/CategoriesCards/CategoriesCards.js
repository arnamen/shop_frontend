import React from 'react'
import { v4 } from 'uuid';
import CategoriesCard from './CategoriesCard/CategoriesCard';

import classes from './CategoriesCards.module.css';

export default function CategoriesCards( props ) {
    let categories;
    if(props.categoriesData && props.categoriesData.length) {
        categories = props.categoriesData.map((CategoryCardData) => {
        
        return  <CategoriesCard key={v4()} to={CategoryCardData.to} img={CategoryCardData.image} name={CategoryCardData.name}/>;
        })
    }

    return (
        <div className={classes['CategoriesCards-wrapper']}>
            {categories}
        </div>
    )
}
