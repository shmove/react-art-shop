import './styles/Basket.css';
import OrderForm from "../components/OrderForm.jsx";
import {useEffect, useState} from "react";
import BasketCard from "../components/BasketCard.jsx";
import OrderResponse from "../components/OrderResponse.jsx";

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

function Basket() {

    const [basket, setBasket] = useState([]);
    const [orderRes, setOrderRes] = useState(null);

    function handleOrderResponse(res) {
        setOrderRes(res);
        if (!res.error) clearBasket();
    }

    // Update basket items on page load and basket update
    useEffect(() => { setBasket(getBasket()); }, []);
    document.addEventListener('basketUpdate', () => { setBasket(getBasket()); }, false);

    if (orderRes !== null) return (
        <OrderResponse apiJSONRes={orderRes} successMessage="Successfully placed your order!" />
    );

    if (basket.length === 0) return (
        <div id="empty-basket">
            <p><em>Your basket is empty.</em></p>
        </div>
    );

    return (
        <div className="basket">
            <div className="basket-items">
                { basket.map((item) => { return (
                    <BasketCard artID={item} onRemove={() => removeFromBasket(item) } />
                ); }) }
            </div>
            <div className="basket-order">
                <OrderForm ArtIDList={basket} onOrder={handleOrderResponse} />
            </div>

        </div>
    )
}

export default Basket;