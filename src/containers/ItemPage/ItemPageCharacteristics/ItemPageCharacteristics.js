import React from 'react';
import {v4} from 'uuid';

import './ItemPageCharacteristics.css';

import {translate} from '../../../utils/translate';

const ItemPageCharacteristics = (props) => {
    const itemData = props.itemData;
    let compareParams = {};
    //получить из предмета тега и сформировать из них таблицу
    Object.keys(itemData.tags).forEach(tag => {
        if(!compareParams[tag]) compareParams[tag]=[];
    })
    const tableBody = Object.keys(compareParams).map(tag => {
        return <tr key={v4()}>
            <td><span className='ItemPageCharacteristics__tag'>{translate[tag] || tag}</span></td>
            <td key={v4()}><span>{(itemData.tags[tag] || '-')}</span></td>
        
        </tr>
    })

    return (
        <div className='ItemPageCharacteristics'>
            <div className='ItemPageCharacteristics__info'>
                <table className='ItemPageCharacteristics__info__table'>
                    <thead>
                        <tr>
                            <th>
                                    <span className='ItemPageCharacteristics__info-header'> {' ' + props.itemData.name}</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItemPageCharacteristics;
