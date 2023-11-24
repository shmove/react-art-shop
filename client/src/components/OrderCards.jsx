import './styles/OrderCards.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {XMarkIcon} from "@heroicons/react/24/solid/index.js";

function OrderCards({ apiPass }) {

    const [orders, setOrders] = useState([]);

    async function getOrders() {
        const res = await fetch(import.meta.env.VITE_BASE_URL + "/api/orders", {
            method: "GET",
            headers: {
                "Authorization": "Basic " + btoa(apiPass),
            }
        });

        const json = await res.json();
        const data = json.data;
        return { data };
    }

    async function removeOrder(artID) {
        await fetch(import.meta.env.VITE_BASE_URL + "/api/orders?id=" + artID, {
            method: "DELETE",
            headers: {
                "Authorization": "Basic " + btoa(apiPass),
            }
        });
        getOrders().then((res) => { setOrders(res.data); });
    }

    // On load, get the orders
    useEffect(() => {
        getOrders().then((res) => {
            setOrders(res.data);
        });
    }, []);

    if (orders.length === 0) {
        return (
            <p><em>No orders found.</em></p>
        )
    } else {
        return (
            <>
                { orders.map((order) => {
                    return (
                        <div key={order["ArtID"]} className="order-card">
                            <div className="order-id">
                                <Link to={"/artwork/" + order["ArtID"]}>
                                    <h2 className="lg:before:content-['Artwork_#']">{order["ArtID"]}</h2>
                                </Link>
                            </div>
                            <div className="order-details">
                                <p>Name: <span>{order["CustomerName"]}</span></p>
                                <p>Number: <span>{order["CustomerNumber"]}</span></p>
                                <p>Email: <span>{order["CustomerEmail"]}</span></p>
                                <p>Address: <span>{order["CustomerAddress"]}</span></p>
                            </div>
                            <div className="order-remove" onClick={() => removeOrder(order["ArtID"])}>
                                <XMarkIcon className="hover-raise" />
                            </div>

                        </div>
                    )
                }) }
            </>
        )
    }

}

export default OrderCards;