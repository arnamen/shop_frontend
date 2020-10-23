import React from 'react'

import './label.css'

export default function label( props ) {

    const className = 'Label Label_' + props.type;

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}
