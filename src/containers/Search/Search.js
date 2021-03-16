import React, {useState} from 'react'
import { connect } from 'react-redux';
import cloneDeep from 'clone-deep';

import Popup from '../../components/UI/Popup/Popup';

import classes from './Search.module.css';

import searchImg from '../../../public/assets/search/magnifying-glass.png';
function Search( props ) {

    const [searchQuery, setSearchQuery] = useState('');
    let matchedString = '';
    let matchReason = '';
    const content = cloneDeep(props.content);
    const matchedContent = [];

    content.forEach(item => {
            let matched = false;
            if(searchQuery === '') return;
            matched = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || matched;

            if(!matched)
            item.categories.forEach(category => {
                matched = category.toLowerCase().includes(searchQuery.toLowerCase());
                if(matched) {
                    matchReason = 'Категория: '; 
                    matchedString = category;
                    return;
                };
            });
            if(!matched)
            for (const tag in item.tags) {
                matched = item.tags[tag].toLowerCase().includes(searchQuery.toLowerCase());
                if(matched) {
                    matchReason = 'Тег: '; 
                    matchedString = item.tags[tag];
                    break;
                };
            }
            if(matchReason && matchedString) item.customText = matchReason + matchedString;

            if(matched) matchedContent.push(item);
    });


    return (
        <div className={classes['Search']}>
            <input type='text' 
            className={classes['Search__field']} 
            placeholder='Поиск...'
            onChange={(event) => setSearchQuery(event.target.value)}/>
            <img className={classes['Search__button']} src={searchImg} alt='search'></img>
            {matchedContent.length > 0 && 
            <div className={classes['Search__matched-content']}>
                <Popup items={matchedContent}/>
            </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
    };
}

export default connect(mapStateToProps)(Search)