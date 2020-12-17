import React from 'react'

export default function Label( props ) {
    return (
        <label htmlFor={props.for} className='Label'>
            {props.children}
        </label>
    )
}
