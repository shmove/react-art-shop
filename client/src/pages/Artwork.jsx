import {useParams} from "react-router-dom";
import OrderForm from "../components/OrderForm.jsx";

import '../components/Order.css';
import ImageComponent from "../components/ImageComponent.jsx";
import {fetchPainting} from "./PaintingListings.jsx";
import {useEffect, useState} from "react";

function Artwork() {

    const id = useParams().id;

    const [painting, setPainting] = useState({});

    useEffect(() => {
        fetchPainting(id).then((res) => {
            setPainting(res.data[0]);
        });
    }, [id]);

    return (
        <div className="flex flex-row gap-4 mx-24 justify-center items-center align-middle">
            <ImageComponent artID={painting["ArtID"]} />
            <div className="flex flex-col gap-3">
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
    );
}

export default Artwork;