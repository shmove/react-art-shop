import {Outlet} from "react-router-dom";

function Root() {
    return (
        <>
            <h1 className="text-5xl text-center text-cara-magenta py-6 font-light font-serif">Cara's Paints</h1>
            <div className="h-0.5 bg-cara-magenta w-auto mx-4 mb-6"></div>
            <Outlet />
        </>
    )
}

export default Root;