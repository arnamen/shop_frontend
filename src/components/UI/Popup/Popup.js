import React from 'react'
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

import { ReactComponent as ReactCart } from '../../../assets/itemsCards/cart-for-card-item.svg';
import { ReactComponent as ReactCompare } from '../../../assets/account/compare.svg';
import { ReactComponent as ReactHeart } from '../../../assets/account/heart.svg';
import { ReactComponent as ReactTrash } from '../../../assets/misc/trash.svg';

import './Popup.css';

export default function Popup(props) {

    const content = [];
    if(props.content && props.content.length > 0)
    props.content.forEach(item => {
        content.push(<tr className='Popup__item' key={v4()}>
            <td>
                <div className='Popup__item__image-wrapper'>
                    <img src={item.image_main} className='Popup__item__image' alt='item_image' />
                </div>
            </td>
            <td>
                <Link to='/' className='Popup__item-descr'>
                    {item.name}
                    <div className='Popup__item__unit-price'>{`${item.amount ? (item.amount + ' × ') : ''}${item.price}₴`}</div>
                </Link>
                </td>
            <td onClick={() => props.onDelete(item)}>
                <div className='Popup__trash-wrapper'>
                 <ReactTrash className='Popup__trash-image' />
                </div>
            </td>
        </tr>)
    });

    return (
        <div className='Popup' onClick={(e) => {e.stopPropagation(); e.preventDefault();}}>
            {props.content.length > 0
                ? <table>
                    <tbody>{content}</tbody>
                </table>
                : content}
        </div>
    )
}
