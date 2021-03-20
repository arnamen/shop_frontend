import React, { useState } from 'react'

import ClientAccount from '..';
import ModalSelect from '../../../components/UI/Modal/ModalSelect/ModalSelect';
import Form from '../../../components/UI/Form/Form';
import Button from '../../../components/UI/Button/Button';
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

    const cityTextField = <Form.TextField id={'input-city'}
        autoupdate={typeof selectedCity === 'object' && selectedCity !== null}
        required
        initialValid
        className={classes['AccountAddress__TextField']}
        value={cityInputPlaceholder || ""} />;

    return (
        <ClientAccount>
            <div className={classes.AccountAddress}>
                <h1>Адрес доставки</h1>
                <ModalSelect data={modalData}
                    onSubmit={(selectedData) => { setSelectedCity({ city: selectedData.name, region: selectedData.subtitle }); setShowSelectModal(false) }}
                    visible={showSelectModal}
                    onClose={() => setShowSelectModal(false)} />
                <Form>
                    <Form.Row className={`${classes['AccountAddress__formRow']} 
                    ${selectedCity === '' 
                    ? classes['AccountAddress__formRow-empty'] 
                    : classes["AccountAddress__formRow-full"]}`}>
                        <span className={`${classes['AccountAddress__input-title'] + ' ' + classes['AccountAddress__input-title-required']}`}>Населенный пункт</span>
                        {cityTextField}
                        <span className={classes.AccountAddress__selectCity} onClick={() => { setShowSelectModal(true) }}></span>
                    </Form.Row>
                    <Form.Row className={`AccountAddress__formRow ${selectedAddress === '' 
                    ? classes['AccountAddress__formRow-empty'] 
                    : classes["AccountAddress__formRow-full"]}`}>
                        <span className={classes['AccountAddress__input-title']}>Адрес</span>
                        <Form.TextField id={'input-address'} 
                        className={classes['AccountAddress__TextField']}
                        onInput={(id, value) => {setSelectedAddress(value)}}/>
                    </Form.Row>
                    <Form.Row>
                        <Button className={classes.AccountAddress__submit}
                        onClick={e => {e.preventDefault(); alert('Submitted! (test mode)')}}>Сохранить изменения</Button>
                    </Form.Row>
                </Form>
            </div>
        </ClientAccount>
    )
}
