import React from 'react'
import { v4 } from 'uuid';

import { ReactComponent as ReactIncrease } from '../../assets/counter/counter-increase.svg';
import { ReactComponent as ReactDecrease } from '../../assets/counter/counter-decrease.svg';

import './Counter.css';


export default function Counter(props) {
    return (
        <div key={v4()}>
            <button className='Counter' onClick={() => props.onClickDecrease()}>
                <ReactDecrease className='Counter-image' />
            </button>
            <input className='Counter' type='text' defaultValue={props.defaultValue || 0} />
            <button className='Counter' onClick={() => props.onClickIncrease()}>
                <ReactIncrease className='Counter-image' />
            </button>
        </div>
    )
}
