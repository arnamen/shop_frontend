import React from 'react'
import { v4 } from 'uuid';

import  ReactIncrease  from '../../../public/assets/counter/counter-increase.svg';
import  ReactDecrease  from '../../../public/assets/counter/counter-decrease.svg';

import classes from './Counter.module.css';


export default function Counter(props) {
    return (
        <div key={v4()}>
            <button className={classes.Counter} onClick={() => props.onClickDecrease()}>
                <ReactDecrease className={classes['Counter-image']} />
            </button>
            <input disabled className={classes.Counter} type='text' defaultValue={props.defaultValue || 0} />
            <button className={classes.Counter} onClick={() => props.onClickIncrease()}>
                <ReactIncrease className={classes['Counter-image']} />
            </button>
        </div>
    )
}
