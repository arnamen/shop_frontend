import React from 'react'

import './label.css'

export default function label( props ) {

    let className = 'Label Label_' + props.type;
    if(props.className) className += ' ' + props.className;
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}
