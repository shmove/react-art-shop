import {Link, Outlet} from "react-router-dom";
import {ShoppingBagIcon, WrenchScrewdriverIcon} from "@heroicons/react/24/solid/index.js";

function Root() {
    return (
        <>
            <div className="flex justify-center relative">
                <div className="absolute top-1/2 translate-y-[-50%] left-4">
                    <Link to="/admin">
                        <WrenchScrewdriverIcon className="w-16 h-16 hover-raise" />
                    </Link>
                </div>

                <Link to="/"><h1 className="text-5xl text-cara-magenta py-6 font-light font-serif hover-raise">Cara's Paints</h1></Link>

                <div className="absolute top-1/2 translate-y-[-50%] right-4">
                    <Link to="/basket">
                        <ShoppingBagIcon className="w-16 h-16 hover-raise" />
                    </Link>
                </div>
            </div>

            <hr/>

            <Outlet />

            <footer>
                <p>All sample images used are sourced from the National Gallery of Art and licensed to the public domain.</p>
            </footer>
        </>
    )
}

export default Root;