import {useParams} from "react-router-dom";
import OrderForm from "../components/OrderForm.jsx";

import {fetchPainting, getImage} from "./PaintingListings.jsx";
import {useEffect, useState} from "react";
import {Spinner} from "flowbite-react";

function Artwork() {

    const id = useParams().id;

    const [painting, setPainting] = useState({});
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        fetchPainting(id).then((res) => {
            setPainting(res.data[0]);
            getImage(id, setImageSrc);
        });
    }, [id]);

    if (JSON.stringify(painting) !== "{}" && imageSrc !== "") return (
        <div className="flex grow flex-row gap-4 mx-24 justify-center items-center align-middle">

            <div className="flex basis-3/4 justify-center items-center">
                <img src={imageSrc} alt={painting["Description"]} className="object-contain" />
            </div>

            <div className="flex flex-grow flex-col gap-3">
                <div className="text-center">
                    <h1>{painting["Name"]}</h1>
                    <h3>({painting["Width"]} x {painting["Height"]} mm)</h3>
                    <h2>£{painting["Price"]}</h2>
                    <p>"{painting["Description"]}"</p>
                    <p>Estimated completion date: {new Date(painting["CompletionDate"]).toDateString()}</p>
                </div>
                {
                    painting["Purchased"] === 1
                        ? <p className="failure">Sold</p>
                        : <OrderForm ArtID={painting["ArtID"]} />
                }
            </div>
        </div>
    )
    else return (
        <div className="flex grow flex-col justify-center items-center">
            <Spinner className="h-32 w-32 text-cara-whiter fill-cara-violet"/>
        </div>
    );
}

export default Artwork;