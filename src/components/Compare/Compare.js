import React from 'react'
import { connect } from 'react-redux';
import {v4} from 'uuid';

import {translate} from '../../utils/translate';

import './Compare.css';

function Compare( props ) {

    const tableHead = <tr>
        <th>Предмет</th>
        {props.compare.map(item => {
            return <th style={{width: (100 / Math.max(props.compare.length, 1)) + '%'}} key={v4()}>
                <img src={item.image_main} className='Compare__img' alt='compare_item_img'></img>
                <span>{item.name}</span>
            </th>
        })}
    </tr>

    let compareParams = {};
    //получить из предметов для сравнения названия их тегов
    //по ним тегам происходит сравнение
     props.compare.forEach(item => {
        Object.keys(item.tags).forEach(tag => {
            if(!compareParams[tag]) compareParams[tag]=[];
        })
    })
    const tableBody = Object.keys(compareParams).map(tag => {
        return <tr key={v4()}>
            <th>{translate[tag] || tag}</th>
            {props.compare.map(item => {
            return <td key={v4()}>{(item.tags[tag] || '-')}</td>;
        })}
        </tr>
    })
    console.log(tableBody)
    return (
        <div className='Compare'>
            <h1 className='Compare__title'>Сравнение товаров</h1>
            <table>
                <thead>
                    {tableHead}
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        compare: state.compare.compare,
    };
}

export default connect(mapStateToProps)(Compare)