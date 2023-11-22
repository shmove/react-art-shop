import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function OrderTable({ apiPass }) {

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
            <p className="text-cara-violet font-light"><em>No orders found.</em></p>
        )
    } else {
        return (
            <table className="table-auto">
                <thead>
                <tr>
                    <th>ArtID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    orders.map((order) => {
                        return (
                            <tr>
                                <td><Link to={"/artwork/" + order["ArtID"]}>{order["ArtID"]}</Link></td>
                                <td>{order["CustomerName"]}</td>
                                <td>{order["CustomerNumber"]}</td>
                                <td>{order["CustomerEmail"]}</td>
                                <td>{order["CustomerAddress"]}</td>
                                <td><button onClick={()=> removeOrder(order["ArtID"])} className="mx-4 bg-cara-failure hover:bg-cara-failure-dark text-cara-whiter font-bold px-2 rounded-xl">
                                    Remove
                                </button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }

}

export default OrderTable;