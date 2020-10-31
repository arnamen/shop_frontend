import React from 'react'

import './FeedbackForm.css';

export default function Form() {
    return (
        <form className='FeedbackForm' onSubmit={(e) => { e.preventDefault(); alert('Отправлено') }}>
            <label for='input-name'>Ваше имя</label>
            <input id='input-name' type='text'></input>
            <label for='input-phone'>Контактный телефон</label>
            <input id='input-phone' type='text'></input>
            <span>
                <label for='input-email'>Электронная почта</label>
                <span className='FeedbackForm__important'>*</span>
            </span>
            <input id='input-email' type='text' required></input>
            <span>
                <label for='input-message'>Сообщение</label>
                <span className='FeedbackForm__important'>*</span>
            </span>
            <textarea id='input-message' type='textarea' required></textarea>
            <button>Отправить</button>
        </form>
    )
}
