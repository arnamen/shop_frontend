import React, {useState} from 'react'
import { connect } from 'react-redux';
import './Search.css';

import searchImg from '../../assets/search/magnifying-glass.png';
function Search( props ) {

    const [searchQuery, setSearchQuery] = useState('')
    console.log(searchQuery);
    return (
        <div className={'Search'}>
            <input type='text' 
            className={'Search__field'} 
            placeholder='Поиск...'
            onChange={(event) => setSearchQuery(event.target.value)}/>
            <img onClick={() => alert('clicked!')} className={'Search__button'} src={searchImg} alt='search'></img>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
    };
}

export default connect(mapStateToProps)(Search)