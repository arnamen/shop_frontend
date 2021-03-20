import React, { useState } from 'react'

import ModalSelect from '../../Modal/ModalSelect/ModalSelect';

import { cities as CitiesList } from '../../../../utils/cities';
import  ReactDeliveryTruck  from '../../../../../public/assets/delivery/delivery-truck.svg';

import classes from './DeliveryCard.module.css';

export default function DeliveryCard(props) {

    const [selectedCity, setSelectedCity] = useState({ city: "Киев", region: "Киевская область" })
    const [showSelectModal, setShowSelectModal] = useState(false)
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

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
        <div className={classes.DeliveryCard}>
            <ModalSelect
                visible={showSelectModal}
                data={modalData}
                onSubmit={(selectedData) => { setSelectedCity({ city: selectedData.name, region: selectedData.subtitle }); setShowSelectModal(false) }}
                onClose={() => setShowSelectModal(false)} />
            <div className={classes.DeliveryCard__header}>
                <ReactDeliveryTruck className={classes.DeliveryCard__deliveryIcon} />
                <span>Доставка в &nbsp;
                    <span className={classes.DeliveryCard__selectedCity} onClick={() => setShowSelectModal(true)}>
                        {selectedCity.city}
                    </span>
                </span>
            </div>
            <div className={classes.DeliveryCard__content}>
                <span>Доставка:</span>
                <ul>
    <li>Самовывоз из Укрпочты: {ukrpostDeliveryPrice}₴, отправим {currentHour < 18 ? ' сегодня' : ' завтра'}</li>
                    <li>Самовывоз из Новой Почты: {newPostDeliveryPrice}₴, отправим {currentHour < 18 ? ' сегодня' : ' завтра'}</li>
                    <li>Доставка курьером: {courierDeliveryPrice}₴, отправим {currentHour < 18 ? ' сегодня' : ' завтра'}</li>
                </ul>
            </div>
        </div>
    )
}
