// Document event on basket update, since sessionStorage update can only be detected by other tabs :p
// https://stackoverflow.com/q/4679023/13460028, https://stackoverflow.com/a/43634169/13460028
export function basketUpdateEvent() {
    const event = new Event('basketUpdate');
    document.dispatchEvent(event);
}

export function getBasket() {
    return JSON.parse(sessionStorage.getItem('basket')) ?? [];
}

export function addToBasket(artID) {
    const currentBasket = getBasket();
    currentBasket.push(artID);
    sessionStorage.setItem('basket', JSON.stringify(currentBasket));
    basketUpdateEvent();
}

export function removeFromBasket(artID) {
    const currentBasket = getBasket();
    const index = currentBasket.indexOf(artID);
    if (index > -1) {
        currentBasket.splice(index, 1);
    }
    sessionStorage.setItem('basket', JSON.stringify(currentBasket));
    basketUpdateEvent();
}

export function clearBasket() {
    sessionStorage.setItem('basket', JSON.stringify([]));
    basketUpdateEvent();
}