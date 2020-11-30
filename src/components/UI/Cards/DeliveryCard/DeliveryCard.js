import React, { useState } from 'react'

import ModalSelect from '../../Modal/ModalSelect/ModalSelect';

import { cities as CitiesList} from '../../../../utils/cities';
import { ReactComponent as ReactDeliveryTruck } from '../../../../assets/delivery/delivery-truck.svg';

import './DeliveryCard.css';

export default function DeliveryCard(props) {

    const [selectedCity, setSelectedCity] = useState('Киев')
    const [showSelectModal, setShowSelectModal] = useState(false)

    const modalData = CitiesList.map(cityData => {return {name: cityData.city, subtitle: cityData.region}})
    return (
        <div className='DeliveryCard'>
            {showSelectModal && <ModalSelect show={showSelectModal}
                data={modalData}
                onSubmit={(selectedData) => { setSelectedCity(selectedData); setShowSelectModal(false) }}
                onClose={() => setShowSelectModal(false)} />}
            <div className='DeliveryCard__header'>
                <ReactDeliveryTruck className='DeliveryCard__deliveryIcon' />
                <span>Доставка в &nbsp;
                    <span className='DeliveryCard__selectedCity' onClick={() => setShowSelectModal(true)}>
                        {selectedCity}
                    </span>
                </span>
            </div>
        </div>
    )
}
