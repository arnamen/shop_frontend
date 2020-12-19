import React, { useState } from 'react'

import ModalSelect from '../../UI/Modal/ModalSelect/ModalSelect';
import Form from '../../UI/Form/Form';

import { cities as CitiesList } from '../../../utils/cities';
import './AccountAddress.css';

export default function AccountAddress( props ) {

    const [showSelectModal, setShowSelectModal] = useState(false);
    const [selectedCity, setSelectedCity] = useState();
    const modalData = CitiesList.map(cityData => { return { name: cityData.city, subtitle: cityData.region } })
    let cityInputPlaceholder;
    if(typeof showSelectModal === 'object' && showSelectModal !== null) 
    cityInputPlaceholder = showSelectModal.name + ', ' + showSelectModal.subtitle;
    else cityInputPlaceholder = showSelectModal;
    return (
        <div className='AccountAddress'>
            <h1>Адрес доставки</h1>
            {showSelectModal && <ModalSelect data={modalData}
            onSubmit={(selectedData) => { setSelectedCity({ city: selectedData.name, region: selectedData.subtitle }); setShowSelectModal(false) }}
            onClose={() => setShowSelectModal(false)} />}
            <Form>
                <Form.Row className='AccountAddress__formRow'>
                    <span>Город</span>
                    <Form.TextField id='Input-city' defaultValue={cityInputPlaceholder} onChange={event=>setSelectedCity(event.target.value)}/>
                    <span className='AccountAddress__selectCity' onClick={() => {setShowSelectModal(true)}}></span>
                </Form.Row>
                <Form.Row className='AccountAddress__formRow'>
                    <span>Адрес</span>
                    <Form.TextField id='Input-address'/>
                </Form.Row>
            </Form>
        </div>
    )
}
