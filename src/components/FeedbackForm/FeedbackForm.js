import React from 'react'

import classes from './FeedbackForm.module.css';

export default function Form() {
    return (
        <form className={classes.FeedbackForm} onSubmit={(e) => { e.preventDefault(); alert('Отправлено') }}>
            <label for='input-name'>Ваше имя</label>
            <input id={classes['input-name']} type='text'></input>
            <label for='input-phone'>Контактный телефон</label>
            <input id={classes['input-phone']} type='text'></input>
            <span>
                <label for='input-email'>Электронная почта</label>
                <span className={classes.FeedbackForm__important}>*</span>
            </span>
            <input id={classes['input-email']} type='text' required></input>
            <span>
                <label for='input-message'>Сообщение</label>
                <span className={classes.FeedbackForm__important}>*</span>
            </span>
            <textarea id={classes['input-message']} type='textarea' required></textarea>
            <button>Отправить</button>
        </form>
    )
}
