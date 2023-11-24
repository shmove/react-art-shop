import {Link, Outlet} from "react-router-dom";
import {ShoppingBagIcon, WrenchScrewdriverIcon} from "@heroicons/react/24/solid/index.js";
import {getBasket} from "./pages/Basket.jsx";
import {useEffect, useState} from "react";

function Root() {

    const [basketItems, setBasketItems] = useState(0);

    // Update basket items on page load and basket update
    useEffect(() => { setBasketItems(getBasket().length); }, []);
    document.addEventListener('basketUpdate', () => { setBasketItems(getBasket().length); }, false);

    return (
        <>
            <div className="flex justify-center relative">
                <div className="absolute top-1/2 translate-y-[-50%] left-4">
                    <Link to="/admin">
                        <WrenchScrewdriverIcon className="w-12 h-12 hover-raise" />
                    </Link>
                </div>

                <Link to="/"><h1 className="py-6 font-serif hover-raise">Cara's Paints</h1></Link>

                <div className="absolute top-1/2 translate-y-[-50%] right-4">
                    <Link to="/basket">
                        <div className="relative hover-raise">
                            <ShoppingBagIcon className="w-12 h-12" />
                            {
                                basketItems > 0 &&
                                <div className="absolute bottom-0 right-0 w-4 h-4 bg-cara-violet rounded-full flex justify-center items-center animate-jump-in animate-duration-200">
                                    <p className="font-bold text-cara-whiter">{basketItems}</p>
                                </div>
                            }

                        </div>

                    </Link>
                </div>
            </div>

            <hr className="mb-6"/>

            <Outlet />

            <footer>
                <p>All sample images used are sourced from the National Gallery of Art and licensed to the public domain.</p>
            </footer>
        </>
    )
}

export default Root;