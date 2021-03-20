import React from 'react'
import { connect } from 'react-redux';

import cardsClasses from '../../../components/UI/Cards/ItemsCards/ItemsCards';
import ItemsCards from '../../../components/UI/Cards/ItemsCards/ItemsCards';
import ClientAccount from '..';

import historyClasses from './AccountHistory.module.css';


const classes = {...cardsClasses, ...historyClasses}

function AccountHistory(props) {
    return (
        <ClientAccount>
            <div className={classes.AccountHistory}>
                <h1>История заказов</h1>
                {/* pass some example data */}
                <ItemsCards itemsData={props.historyItems || props.content} />
            </div>
        </ClientAccount>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
    };
}

export default connect(mapStateToProps)(AccountHistory)