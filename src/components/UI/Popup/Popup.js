import React from 'react'
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

import { ReactComponent as ReactCart } from '../../../assets/itemsCards/cart-for-card-item.svg';
import { ReactComponent as ReactCompare } from '../../../assets/account/compare.svg';
import { ReactComponent as ReactHeart } from '../../../assets/account/heart.svg';
import { ReactComponent as ReactTrash } from '../../../assets/misc/trash.svg';
import { ReactComponent as ReactAccount } from '../../../assets/account/account.svg';

import { popupMessages } from '../../../utils/popup_messages';

import './Popup.css';

const typeImages = {
    cart: ReactCart,
    compare: ReactCompare,
    favourites: ReactHeart,
    account: ReactAccount
}

export default function Popup(props) {

    const content = [];

    let redirectButton;
    let actionButton;

    if (props.content && props.content.length > 0)
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
    else if (props.content && props.content.length === 0) {
        const ImageEmpty = typeImages[props.type] || <React.Fragment />;
        content.push(<div key={v4()}>
            <div className='Popup__empty-wrapper'>
                <ImageEmpty className='Popup__empty-img' viewBox="0 0 512 512" />
                <div>{popupMessages.empty[props.type]}</div>
            </div>
        </div>)
    }
    else {
        //отобразить кнопки если контент для формирования таблицы не указан
        redirectButton = popupMessages.redirectButton[props.type];
        actionButton = popupMessages.actionButton[props.type];
        //
        const ImageEmpty = typeImages[props.type] || <React.Fragment />;
        content.push(<div key={v4()}>
            <div className='Popup__empty-wrapper'>
                <ImageEmpty className='Popup__empty-img' viewBox="0 0 512 512" />
                <div>{popupMessages.empty[props.type]}</div>
            </div>
        </div>)
        }
    return (
        <div className='Popup' onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}>
            {props.content && props.content.length > 0
                ? <React.Fragment>
                    <p>{popupMessages.full[props.type || 'default'](props.content.length)}</p>
                    <table>
                        <tbody>
                            {content}
                            <tr className={actionButton && 'Popup__actions-wrapper' /* применять стиль только когда надо расположить несколько кнопок */}>
                                <td>{redirectButton && <Link className='Popup__redirect-button' to={redirectButton.to}>{redirectButton.title}</Link>}</td>
                                <td>{actionButton && <Link className='Popup__action-button' to={actionButton.action}>{actionButton.title}</Link>}</td>
                            </tr>
                        </tbody>
                    </table>
                </React.Fragment>
                : <div>
                    {content}
                    <div className={actionButton && 'Popup__actions-wrapper' /* применять стиль только когда надо расположить несколько кнопок */}>
                        <div>{redirectButton && <Link className='Popup__redirect-button' to={redirectButton.to}>{redirectButton.title}</Link>}</div>
                        <div>{actionButton && <Link className='Popup__action-button' to={actionButton.action}>{actionButton.title}</Link>}</div>
                    </div>
                </div>}
        </div>
    )
}
