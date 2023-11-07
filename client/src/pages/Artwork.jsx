import {useLoaderData} from "react-router-dom";
import OrderForm from "../components/OrderForm.jsx";

import {randomTempImage} from "../components/PaintingCard.jsx";

function Artwork() {

    const { data } = useLoaderData();
    const painting = data[0];

    return (
        <div className="flex flex-row gap-4 mx-24 justify-center items-center align-middle">
            <img className="" src={randomTempImage()}/>
            <div className="flex flex-col">
                <div className="mb-8">
                    <h1 className="text-5xl text-center text-cara-magenta font-light">{painting["Name"]}</h1>
                    <h2 className="text-2xl text-center text-cara-violet font-light">({painting["Width"]} x {painting["Height"]} mm)</h2>
                    <h3 className="text-2xl text-center text-cara-magenta font-bold">£{painting["Price"]}</h3>
                    <p className="text-center text-cara-violet font-light">"{painting["Description"]}"</p>
                    <p className="text-center text-cara-violet font-light">Estimated completion date: {new Date(painting["CompletionDate"]).toDateString()}</p>
                </div>
                <OrderForm ArtID={painting["ArtID"]} />
            </div>
        </div>
    );
}

export default Artwork;