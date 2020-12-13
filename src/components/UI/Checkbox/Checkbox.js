import React from 'react'

export default function Checkbox( props ) {
    return (
        <div>
            <label htmlFor={props.id} className='Checkbox'>
                    <input id={props.id} 
                    type='checkbox'
                    defaultChecked={props.checked || false}
                    onChange={props.onChange || ((e) => 0)}
                    />
                    {props.children}
                </label>
        </div>
    )
}
