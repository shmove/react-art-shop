import "./styles/Admin.css";

import {useState} from "react";
import OrderCards from "../components/OrderCards.jsx";
import ArtworkCreator from "../components/ArtworkCreator.jsx";
import Lightswitch from "../components/Lightswitch.jsx";

const PASSWORD = "WeKnowTheGame23";

function Admin() {

    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(null);

    const [panel, setPanel] = useState(1);

    function submitLogin() {
        if (password === PASSWORD) {
            setLoggedIn(true);

        } else {
            setLoggedIn(false);
        }
    }

    if (loggedIn) {

        return (
            <div className="admin-panel">
                <Lightswitch left="Artwork" right="Orders" onLeft={() => setPanel(1)} onRight={() => setPanel(2)} />
                {
                    panel === 1 &&
                    <div id="artwork-panel">
                        <h2>Create Artwork</h2>
                        <ArtworkCreator apiPass={password} />
                    </div>
                }
                {
                    panel === 2 &&
                    <div id="order-panel">
                        <h2>Manage Orders</h2>
                        <OrderCards apiPass={password} />
                    </div>
                }
            </div>
        )

    } else {
        return (
            <div className="admin-login">
                <p>Please enter the admin password to access this section.</p>
                <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={submitLogin}>Submit</button>
                {
                    loggedIn !== null
                    ? <p className="text-cara-failure">Incorrect password.</p>
                    : ""
                }
            </div>
        )
    }
}

export default Admin;