import {useState} from "react";
import {Link} from "react-router-dom";

const PASSWORD = "WeKnowTheGame23";

async function getOrders() {
    const res = await fetch("/api/orders", {
        method: "GET",
        headers: {
            "Authorization": "Basic " + btoa(PASSWORD),
        }
    });

    const json = await res.json();
    const data = json.data;
    return { data };
}

async function removeOrder(artID) {
    // TODO
}

function Admin() {

    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(null);
    const [orders, setOrders] = useState([]);

    function submitLogin() {
        if (password === PASSWORD) {
            setLoggedIn(true);
            getOrders().then((res) => { setOrders(res.data); });
        } else {
            setLoggedIn(false);
        }
    }

    if (loggedIn) {

        return (
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold text-cara-magenta">Orders</h2>
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
                                    <td><button
                                        className="mx-4 bg-cara-failure text-cara-whiter font-bold px-2 rounded-xl"
                                        >
                                        Remove (TODO)
                                    </button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

                <h2 className="text-2xl font-bold text-cara-magenta">Add New Artwork</h2>
                <p>TODO</p>
            </div>
        )

    } else {
        return (
            <div className="flex flex-col items-center justify-center">
                <p className="text-cara-violet font-bold">Please enter the admin password to access this section.</p>
                <input placeholder="Password" type="password" className="h-8 my-2" onChange={(e) => setPassword(e.target.value)}/>
                <p className="bg-cara-violet text-cara-whiter transition hover:bg-cara-magenta font-bold rounded-xl p-2" onClick={submitLogin}>Submit</p>
                {
                    loggedIn !== null
                    ? <p className="text-cara-failure font-bold">Incorrect password.</p>
                    : ""
                }
            </div>
        )
    }
}

export default Admin;