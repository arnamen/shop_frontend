import React from 'react'

import './TextField.css';

export default function TextField( props ) {
    return (
        <input type='text' className='TextField' onChange={(event) => props.onChange(event)} id={props.id || ''}/>
    )
}
