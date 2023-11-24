import './styles/Artwork.css';

import {useParams} from "react-router-dom";

import {useEffect, useState} from "react";
import {Spinner} from "flowbite-react";
import {addToBasket, getBasket, removeFromBasket} from "../utils/basketUtils.jsx";
import {displayPrice, fetchPainting, getImage} from "../utils/artUtils.jsx";

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

    if (JSON.stringify(painting) === "{}" && imageSrc === "") return (
        <div className="flex grow flex-col justify-center items-center">
            <Spinner className="h-32 w-32 text-cara-whiter fill-cara-violet"/>
        </div>
    )

    return (
        <div className="artwork-layout">

            <div className="image-panel">
                <img src={imageSrc} alt={painting["Name"]} />
            </div>

            <div className="info-panel">
                <div>
                    <h1>{painting["Name"]}</h1>
                    <h3>({painting["Width"]} x {painting["Height"]} mm)</h3>
                    <h2>{displayPrice(painting["Price"])}</h2>
                    <p>"{painting["Description"]}"</p>
                    <p><em>Estimated completion date: {new Date(painting["CompletionDate"]).toDateString()}</em></p>
                </div>
                {
                    painting["Purchased"] === 1
                    ? <p className="failure">Sold</p>
                    :   inBasket
                        ? <button className="toggled" onClick={() => { removeFromBasket(id); }}>Remove from basket</button>
                        : <button onClick={() => { addToBasket(id); }}>Add to basket</button>
                }
            </div>

        </div>
    )
}

export default Artwork;