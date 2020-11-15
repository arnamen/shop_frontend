const cartWithItemsMessage = (itemsAmount) => {
    let message = 'В вашей корзине ' + itemsAmount + ' товар';
    if(itemsAmount === 1) return message;
    else if(itemsAmount <= 4) return (message + 'а')
    else return (message + 'ов');
}

const compareWithItemsMessage = (itemsAmount) => {
    let message = 'У вас в сравнении ' + itemsAmount + ' товар';
    if(itemsAmount === 1) return message;
    else if(itemsAmount <= 4) return (message + 'а')
    else return (message + 'ов');
}

const favouritesWithItemsMessage = (itemsAmount) => {
    let message = 'У вас в избранном ' + itemsAmount + ' товар';
    if(itemsAmount === 1) return message;
    else if(itemsAmount <= 4) return (message + 'а')
    else return (message + 'ов');
}

const defaultMessage = (itemsAmount) => {
    let message = 'У вас ' + itemsAmount + ' товар';
    if(itemsAmount === 1) return message;
    else if(itemsAmount <= 4) return (message + 'а')
    else return (message + 'ов');
}

export const popupMessages = {
    empty: {
        cart: 'Ваша корзина пуста',
        favourites: 'Избранные товары отсутствуют',
        compare: 'Товары для сравнения отсутствуют',
        default: 'Товары отсутствуют'
    },
    full: {
        cart: cartWithItemsMessage,
        favourites: favouritesWithItemsMessage,
        compare: compareWithItemsMessage,
        default: defaultMessage
    }
}

