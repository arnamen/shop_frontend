import React from 'react'

import classes from './Contacts.module.css';

export default function Contacts() {
    return (
        <React.Fragment>
            <div className={classes.Contacts}>
                <h1>Контакты</h1>
                <span>Вы можете найти нас по адресу: г. Киев, ул. Т. Шевченка, дом 123, офис 456</span>
                <span>Как добраться: Линия метро M1, последний вагон из центра, выход в сторону вокзала.</span>
                <span>Телефон отдела продаж: 38-093-123-45-67</span>
                <span>Телефон отдела оптовых продаж: 38-093-123-45-67</span>
                <span>Email: <a href="/pages/contacts">example@example.com</a></span>
                <span className={classes['Contacts__table-title']}><strong>График работы офиса и склада:</strong></span>
                <table>
                    <tbody>
                        <tr>
                            <td>Понедельник</td>
                            <td>с 9:00 до 21:00</td>
                        </tr>
                        <tr>
                            <td>Вторник</td>
                            <td>с 9:00 до 21:00</td>
                        </tr>
                        <tr>
                            <td>Среда</td>
                            <td>с 9:00 до 21:00</td>
                        </tr>
                        <tr>
                            <td>Четверг</td>
                            <td>с 9:00 до 21:00</td>
                        </tr>
                        <tr>
                            <td>Пятница</td>
                            <td>с 9:00 до 21:00</td>
                        </tr>
                        <tr>
                            <td>Суббота</td>
                            <td>с 10:00 до 2:00</td>
                        </tr>
                        <tr>
                            <td>Воскресенье</td>
                            <td>с 10:00 до 20:00</td>
                        </tr>
                    </tbody>
                </table>
                <span>Заказы через сайт принимаются круглосуточно!</span>
                <span>
                    ИП Иванов Иван Иванович <br />
            ОГРНИП: 123456789012345 <br />
            ИНН: 123456789012 <br />
            КПП: 123456789 <br />
                </span>
            </div>
            <iframe
                title='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.9874979160336!2d30.51382511589938!3d50.4599574945606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce43ca1dbed7%3A0x1e468b5f26eac2de!2z0JfQsNC80L7QuiDQoNC40YfQsNGA0LTQsCDQm9GM0LLQuNC90L7QtSDRgdC10YDQtNGG0LU!5e0!3m2!1sru!2sua!4v1604171040437!5m2!1sru!2sua"
                width="600"
                height="450"
                frameborder="0"
                style={{ border: 'none', width: '100%' }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"></iframe>
        </React.Fragment>
    )
}
