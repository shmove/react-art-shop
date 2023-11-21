import {useState} from "react";
import OrderTable from "../components/OrderTable.jsx";
import ArtworkCreator from "../components/ArtworkCreator.jsx";

const PASSWORD = "WeKnowTheGame23";

function Admin() {

    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(null);

    function submitLogin() {
        if (password === PASSWORD) {
            setLoggedIn(true);

        } else {
            setLoggedIn(false);
        }
    }

    if (loggedIn) {

        return (
            <div className="flex grow flex-col items-center gap-4">
                <h2>Create Artwork</h2>
                <ArtworkCreator apiPass={password} />
                <hr className="w-1/2 my-6" />
                <h2>Orders</h2>
                <OrderTable apiPass={password} />
            </div>
        )

    } else {
        return (
            <div className="flex flex-col items-center justify-center">
                <p className="font-bold">Please enter the admin password to access this section.</p>
                <input placeholder="Password" type="password" className="h-8 my-2" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={submitLogin}>Submit</button>
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