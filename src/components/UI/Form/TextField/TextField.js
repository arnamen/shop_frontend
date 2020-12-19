import React from 'react'

import './TextField.css';

export default function TextField( props ) {
    return (
        <input type={props.type || 'text'} 
        className='TextField' 
        onChange={props.onChange} 
        id={props.id || ''}
        placeholder={props.placeholder || ''}
        defaultValue={props.defaultValue || ''}/>
    )
}
