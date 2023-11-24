import './styles/Root.css';
import {Link, Outlet} from "react-router-dom";
import {ShoppingBagIcon, WrenchScrewdriverIcon} from "@heroicons/react/24/solid/index.js";
import {useEffect, useState} from "react";
import {getBasket} from "../utils/basketUtils.jsx";

function Root() {

    const [basketItems, setBasketItems] = useState(0);

    // Update basket items on page load and basket update
    useEffect(() => { setBasketItems(getBasket().length); }, []);
    document.addEventListener('basketUpdate', () => { setBasketItems(getBasket().length); }, false);

    return (
        <>
            <nav>
                <div className="left-4">
                    <Link to="/admin">
                        <WrenchScrewdriverIcon className="hover-raise" />
                    </Link>
                </div>

                <Link to="/"><h1 className="py-6 font-serif hover-raise">Cara's Paints</h1></Link>

                <div className="right-4">
                    <Link to="/basket">
                        <div className="relative hover-raise">
                            <ShoppingBagIcon />
                            {
                                basketItems > 0 &&
                                <div className="basket-counter">
                                    <p>{basketItems}</p>
                                </div>
                            }

                        </div>

                    </Link>
                </div>
            </nav>

            <hr className="mb-6"/>

            <Outlet />

            <footer>
                <p>All sample images and accompanying descriptions used are sourced from the National Gallery of Art and licensed to the public domain.</p>
            </footer>
        </>
    )
}

export default Root;