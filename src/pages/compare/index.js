import React from 'react'
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import Link from 'next/link';

import * as actionTypes from '../../store/actions/actionTypes';

import ReactCompare from '../../../public/assets/account/compare.svg';

import { translate } from '../../utils/translate';

import classes from './Compare.module.css';

function Compare(props) {
    const tableHead = <tr>
        <th>Товар</th>
        {props.compare.map(item => {

            return <th style={{ width: (100 / Math.max(props.compare.length, 1)) + '%' }} key={v4()}>
                <Link href={'/item/' + item.id.toLowerCase()}>
                    <a>
                        <img src={item.images[0]} className={classes.Compare__img} alt='compare_item_img'></img>
                        <span>{item.name}</span>
                    </a>
                </Link>
            </th>
        })}
    </tr>

    let compareParams = {};
    //получить из предметов для сравнения названия их тегов
    //по ним тегам происходит сравнение
    props.compare.forEach(item => {
        Object.keys(item.tags).forEach(tag => {
            if (!compareParams[tag]) compareParams[tag] = [];
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

    const tableFooter = <tr>
        <td></td>
        {props.compare.map(item => {
            return <td key={v4()}>
                <button onClick={e => props.onRemoveFromCompare(item)}>
                    <span>Удалить</span>
                </button>
            </td>
        })}
    </tr>

    return (
        <div className={classes.Compare}>
            <div className={classes.Compare__data}>
                <h1 className={classes.Compare__title}>Сравнение товаров</h1>
                {props.compare.length > 0
                    ? <table>
                        <thead>
                            {tableHead}
                        </thead>
                        <tbody>
                            {tableBody}
                        </tbody>
                        <tfoot>
                            {tableFooter}
                        </tfoot>
                    </table>
                    : <div className={classes['Compare__empty-wrapper']}>
                        <ReactCompare className={classes['Compare__empty-img']} viewBox="0 0 512 512" />
                        <p>Похоже, тут ничего нету</p>
                    </div>}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        compare: state.compare.compare,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveFromCompare: (item) => dispatch({
            type: actionTypes.REMOVE_COMPARE,
            item,
        }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Compare)