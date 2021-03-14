import React from 'react'
import {Link} from 'next/router';

import classes from './CategoriesCard.module.css';

export default function CategoriesCard(props) {
    return (
        <Link href={props.to} className={classes.CategoriesCard}>
            <div className={classes.CategoriesCard_wrapper}>
                <div className={classes['CategoriesCard_title-wrapper']}>
                    <span className={classes.CategoriesCard_title}>
                        {props.name}
                    </span>
                </div>
                <img src={props.img} alt='category' className={classes.CategoriesCard_image}></img>
            </div>
        </Link>
    )
}
