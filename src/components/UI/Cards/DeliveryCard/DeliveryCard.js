import React, { useState } from 'react'

import ModalSelect from '../../Modal/ModalSelect/ModalSelect';

import { cities as CitiesList } from '../../../../utils/cities';
import { ReactComponent as ReactDeliveryTruck } from '../../../../assets/delivery/delivery-truck.svg';

import './DeliveryCard.css';

export default function DeliveryCard(props) {

    const [selectedCity, setSelectedCity] = useState({ city: "Киев", region: "Киевская область" })
    const [showSelectModal, setShowSelectModal] = useState(false)

    let priceMultiplyer = 1;

    switch (selectedCity.region) {
        case "Киевская область":
            priceMultiplyer = 1;
            break;
        case "Житомирская область":
        case "Винницкая область":
        case "Черкасская область":
        case "Черниговская область":
            priceMultiplyer = 1.1;
            break;

        default:
            priceMultiplyer = 1.2;
    }
    const newPostDeliveryPrice = (props.itemData.price * 0.05 * priceMultiplyer).toFixed();
    const courierDeliveryPrice = (props.itemData.price * 0.09 * priceMultiplyer).toFixed();
    const ukrpostDeliveryPrice = (props.itemData.price * 0.025 * priceMultiplyer).toFixed();


    const modalData = CitiesList.map(cityData => { return { name: cityData.city, subtitle: cityData.region } })
    return (
        <div className='DeliveryCard'>
            {showSelectModal && <ModalSelect show={showSelectModal}
                data={modalData}
                onSubmit={(selectedData) => { setSelectedCity({ city: selectedData.name, region: selectedData.subtitle }); setShowSelectModal(false) }}
                onClose={() => setShowSelectModal(false)} />}
            <div className='DeliveryCard__header'>
                <ReactDeliveryTruck className='DeliveryCard__deliveryIcon' />
                <span>Доставка в &nbsp;
                    <span className='DeliveryCard__selectedCity' onClick={() => setShowSelectModal(true)}>
                        {selectedCity.city}
                    </span>
                </span>
            </div>
            <div className='DeliveryCard__content'>
                <span>Доставка:</span>
                <ul>
                    <li>Самовывоз из Укрпочты: {ukrpostDeliveryPrice}₴</li>
                    <li>Самовывоз из Новой Почты: {newPostDeliveryPrice}₴</li>
                    <li>Доставка курьером: {courierDeliveryPrice}₴</li>
                </ul>
            </div>
        </div>
    )
}
