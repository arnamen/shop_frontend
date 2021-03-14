import React, { useState } from 'react'

import ClientAccount from '../';
import ModalSelect from '../../UI/Modal/ModalSelect/ModalSelect';
import Form from '../../UI/Form/Form';
import Button from '../../UI/Button/Button';
import { cities as CitiesList } from '../../../utils/cities';
import classes from './AccountAddress.module.css';

export default function AccountAddress(props) {

    const [showSelectModal, setShowSelectModal] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedAddress, setSelectedAddress] = useState('');
    const modalData = CitiesList.map(cityData => { return { name: cityData.city, subtitle: cityData.region } })
    let cityInputPlaceholder;
    if (typeof selectedCity === 'object' && selectedCity !== null)
        cityInputPlaceholder = selectedCity.city + ', ' + selectedCity.region;
    else cityInputPlaceholder = selectedCity;

    const cityTextField = <Form.TextField id={classes['input-city']}
        autoupdate={typeof selectedCity === 'object' && selectedCity !== null}
        required
        defaultValue={cityInputPlaceholder}
        onChange={event => setSelectedCity(event.target.value)} />;

    return (
        <ClientAccount>
            <div className={classes.AccountAddress}>
                <h1>Адрес доставки</h1>
                {showSelectModal && <ModalSelect data={modalData}
                    onSubmit={(selectedData) => { setSelectedCity({ city: selectedData.name, region: selectedData.subtitle }); setShowSelectModal(false) }}
                    onClose={() => setShowSelectModal(false)} />}
                <Form>
                    <Form.Row className={`AccountAddress__formRow ${selectedCity === '' && 'AccountAddress__formRow-empty'}`}>
                        <span className={`${classes['AccountAddress__input-title'] + ' ' + classes['AccountAddress__input-title-required']}`}>Населенный пункт</span>
                        {cityTextField}
                        <span className={classes.AccountAddress__selectCity} onClick={() => { setShowSelectModal(true) }}></span>
                    </Form.Row>
                    <Form.Row className={`AccountAddress__formRow ${selectedAddress === '' && 'AccountAddress__formRow-empty'}`}>
                        <span className={classes['AccountAddress__input-title']}>Адрес</span>
                        <Form.TextField id={classes['input-address']} />
                    </Form.Row>
                    <Form.Row>
                        <Button className={classes.AccountAddress__submit}>Сохранить изменения</Button>
                    </Form.Row>
                </Form>
            </div>
        </ClientAccount>
    )
}
