import React from 'react'

import classes from './Search.module.css';

import searchImg from '../../assets/search/magnifying-glass.png';

export default function Search() {
    return (
        <div className={classes.search_wrapper}>
            <input type='text' className={classes.search_field} placeholder='Поиск...'></input>
            <img onClick={() => alert('clicked!')} className={classes.search} src={searchImg} alt='search'></img>
        </div>
    )
}
