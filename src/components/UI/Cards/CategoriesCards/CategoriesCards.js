import React from 'react'
import { v4 } from 'uuid';
import CategoriesCard from './CategoriesCard/CategoriesCard';

import './CategoriesCards.css';

export default function CategoriesCards( props ) {
    let categories;
    if(props.categoriesData && props.categoriesData.length) {
        categories = props.categoriesData.map((categoryDataRow = []) => {
            const categories_row = categoryDataRow.map((categoryData) => {
                return <CategoriesCard cardsInRow={categoryDataRow.length} to={categoryData.to} name={categoryData.name} img={categoryData.image}/>
            });
        return  <div key={v4()} className='CategoriesCards_categoriesRowWrapper'>{categories_row}</div>;
        })
    }

    return (
        <div className='CategoriesCards-wrapper'>
            {categories}
        </div>
    )
}
