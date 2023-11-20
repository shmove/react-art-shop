import {Link, Outlet} from "react-router-dom";
import {WrenchScrewdriverIcon} from "@heroicons/react/24/solid/index.js";

function Root() {
    return (
        <>
            <div className="flex justify-center relative">
                <Link to="/"><h1 className="text-5xl text-cara-magenta py-6 font-light font-serif transition hover:scale-105">Cara's Paints</h1></Link>
                <div className="absolute top-1/2 translate-y-[-50%] left-4">
                    <Link to="/admin">
                        <WrenchScrewdriverIcon className="fill-cara-magenta w-16 h-16 transition hover:scale-105" />
                    </Link>
                </div>
            </div>

            <div className="h-0.5 bg-cara-magenta w-auto mx-4 mb-6"></div>
            <Outlet />
        </>
    )
}

export default Root;