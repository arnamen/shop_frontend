import React from 'react'
import { v4 } from 'uuid';
import Link from 'next/link';

import ReactTrash from '../../../../../public/assets/misc/trash.svg';

import classes from './PopupItemsTable.module.css';

export default function PopupItemsTable( props ) {
    return (
        <table>
            <tbody>
            {
                 props.content.map(item => <tr className={classes.PopupItemsTable__item} key={v4()}>
                        <td>
                            <Link href={`/item/${item.id.toLowerCase()}`}>
                                <a className={classes['PopupItemsTable__item__image-wrapper']}>
                                 <img src={item.images[0]} className={classes.PopupItemsTable__item__image} alt='item_image' />
                                </a>
                            </Link>
                        </td>
                        <td className={classes['PopupItemsTable__item-descr-tr']}>
                            <Link href={`/item/${item.id.toLowerCase()}`}>
                                <a className={classes['PopupItemsTable__item-descr']} onClick={() => document.activeElement.blur()}>
                                {item.name}
                                <div className={classes['PopupItemsTable__item__unit-price']}>{`${item.amount ? (item.amount + ' × ') : ''}${item.price}₴`}</div>
                                {item.customText && <div className={classes['PopupItemsTable__item-descr__custom-text']}>{item.customText}</div>}
                                </a>
                            </Link>
                        </td>
                        {props.onDelete && <td onClick={() => props.onDelete(item)}>
                            <div className={classes['PopupItemsTable__trash-wrapper']}>
                                <ReactTrash className={classes['PopupItemsTable__trash-image']} />
                            </div>
                        </td>}
                    </tr>)
            }
            </tbody>
        </table>
    )
}
