import {useParams} from "react-router-dom";

import {fetchPainting, getImage} from "./PaintingListings.jsx";
import {useEffect, useState} from "react";
import {Spinner} from "flowbite-react";
import {addToBasket, getBasket, removeFromBasket} from "./Basket.jsx";

function Artwork() {

    const id = useParams().id;

    const [painting, setPainting] = useState({});
    const [imageSrc, setImageSrc] = useState("");
    const [inBasket, setInBasket] = useState(false);

    // Update basketed status on page load and basket update
    function updateInBasket() { getBasket().includes(id) ? setInBasket(true) : setInBasket(false); }
    useEffect(() => { updateInBasket(); }, []);
    document.addEventListener('basketUpdate', () => { updateInBasket(); }, false);

    useEffect(() => {
        fetchPainting(id).then((res) => {
            setPainting(res.data[0]);
            getImage(id).then((res) => { setImageSrc(res); });
        });
    }, [id]);

    if (JSON.stringify(painting) !== "{}" && imageSrc !== "") return (
        <div className="flex grow flex-row gap-4 mx-24 justify-center items-center align-middle">

            <div className="flex basis-3/4 justify-center items-center">
                <img src={imageSrc} alt={painting["Description"]} className="object-contain" />
            </div>

            <div className="flex flex-grow flex-col gap-3 items-center">
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
                    :   inBasket
                        ? <button className="w-64 bg-cara-success hover:bg-cara-success-dark" onClick={() => { removeFromBasket(id); }}>Remove from basket</button>
                        : <button className="w-64" onClick={() => { addToBasket(id); }}>Add to basket</button>
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