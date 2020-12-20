import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Form from '../../UI/Form/Form';
import Button from '../../UI/Button/Button';

import './AccountContacts.css';

export default function AccountContacts( props ) {

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false)
    return (
        <div className='AccountContacts' onClick={() => setShowCalendar(false)}>
            <h1>Контанты</h1>
            <Form>
                <Form.Row className={`AccountContacts__formRow ${fullName === '' && 'AccountContacts__formRow-empty'}`}
                onChange={e => setFullName(e.target.value)}>
                    <span className='AccountContacts__input-title AccountContacts__input-title-required'>Контактное лицо (ФИО)</span>
                    <Form.TextField id='input-fullname' required/>
                </Form.Row>
                <Form.Row className={`AccountContacts__formRow ${phoneNumber === '' && 'AccountContacts__formRow-empty'}`}
                onChange={e => setPhoneNumber(e.target.value)}>
                    <span className='AccountContacts__input-title AccountContacts__input-title-required'>Контактный телефон</span>
                    <Form.TextField id='input-phone-number' required/>
                </Form.Row>
                <Form.Row className={`AccountContacts__formRow ${email === '' && 'AccountContacts__formRow-empty'}`}
                onChange={e => setEmail(e.target.value)}>
                    <span className='AccountContacts__input-title'>E-mail</span>
                    <Form.TextField id='input-email'/>
                </Form.Row>
                <Form.Row className={`AccountContacts__formRow ${birthDate === '' && 'AccountContacts__formRow-empty'}`}
                onChange={e => setBirthDate(e.target.value)} onClick={e => e.stopPropagation()}>
                    <span className='AccountContacts__input-title'>Дата рождения</span>
                    <Form.TextField id='input-birthdate' value={birthDate.toJSON().slice(0,10)} onClick={e => {setShowCalendar(true)}}/>
                    <Calendar value={birthDate} autoupdate onChange={(date) => {setBirthDate(date); setShowCalendar(false)}} 
                    className={(!showCalendar ? 'AccountContacts__calendar-hide' : 'AccountContacts__calendar') }/>
                </Form.Row>
                <Form.Row>
                    <Button className='AccountContacts__submit'>Сохранить изменения</Button>
                </Form.Row>
            </Form>
        </div>
    )
}
