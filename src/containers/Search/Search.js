import React from 'react'

import classes from './Search.css';

import searchImg from '../../assets/search/magnifying-glass.png';

export default function Search() {
    return (
        <div className={'Search'}>
            <input type='text' className={'Search__field'} placeholder='Поиск...'/>
            <img onClick={() => alert('clicked!')} className={'Search__button'} src={searchImg} alt='search'></img>
        </div>
    )
}
