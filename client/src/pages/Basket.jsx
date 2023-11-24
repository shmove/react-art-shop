import './styles/Basket.css';
import OrderForm from "../components/OrderForm.jsx";
import {useEffect, useState} from "react";
import BasketCard from "../components/BasketCard.jsx";
import OrderResponse from "../components/OrderResponse.jsx";
import {clearBasket, getBasket, removeFromBasket} from "../utils/basketUtils.jsx";

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
        <div id="empty-notif">
            <p><em>Your basket is empty.</em></p>
        </div>
    );

    return (
        <div className="basket">
            <div className="basket-items">
                { basket.map((item) => { return (
                    <BasketCard key={item} artID={item} onRemove={() => removeFromBasket(item) } />
                ); }) }
            </div>
            <div className="basket-order">
                <OrderForm ArtIDList={basket} onOrder={handleOrderResponse} />
            </div>

        </div>
    )
}

export default Basket;