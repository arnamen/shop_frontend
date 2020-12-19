import React from 'react'

import './AccountDiscount.css';

export default function AccountDiscount( props ) {

    const bonusAmount = 500;

    return (
        <div className='AccountDiscount'>
            <h1 className='AccountDiscount__title'>Скидки и бонусы</h1>
            <span>Баланс бонусов: <span style={{fontWeight: 700}}>{bonusAmount}</span></span>
            <h2 className='AccountDiscount__subtitle'>История списания и начисления бонусов</h2>
            <table>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Описание</th>
                        <th>Основание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>19.12.2020 XX:YY</td>
                        <td>Зачислено 500 баллов</td>
                        <td>Бонус за регистрацию</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    <td></td>
                        <td></td>
                        <td>Итого: <span style={{fontWeight: 700}}>{bonusAmount}</span></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
