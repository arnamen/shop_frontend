import React from 'react'
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

import { ReactComponent as ReactTrash } from '../../../../assets/misc/trash.svg';

import './PopupItemsTable.css';

export default function PopupItemsTable( props ) {
    return (
        <table>
            <tbody>
            {
                 props.content.map(item => <tr className='PopupItemsTable__item' key={v4()}>
                        <td>
                            <div className='PopupItemsTable__item__image-wrapper'>
                                <img src={item.images[0]} className='PopupItemsTable__item__image' alt='item_image' />
                            </div>
                        </td>
                        <td>
                            <Link to={`/item/${item.id.toLowerCase()}`} className='PopupItemsTable__item-descr'>
                                {item.name}
                                <div className='PopupItemsTable__item__unit-price'>{`${item.amount ? (item.amount + ' × ') : ''}${item.price}₴`}</div>
                            </Link>
                        </td>
                        <td onClick={() => props.onDelete(item)}>
                            <div className='PopupItemsTable__trash-wrapper'>
                                <ReactTrash className='PopupItemsTable__trash-image' />
                            </div>
                        </td>
                    </tr>)
            }
            </tbody>
        </table>
    )
}
