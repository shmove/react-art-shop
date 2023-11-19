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
                <div>
                    <h1 className="text-5xl text-center text-cara-magenta font-light">{painting["Name"]}</h1>
                    <h2 className="text-2xl text-center text-cara-violet font-light">({painting["Width"]} x {painting["Height"]} mm)</h2>
                    <h3 className="text-2xl text-center text-cara-magenta font-bold">£{painting["Price"]}</h3>
                    <p className="text-center text-cara-violet font-light">"{painting["Description"]}"</p>
                    <p className="text-center text-cara-violet font-light">Estimated completion date: {new Date(painting["CompletionDate"]).toDateString()}</p>
                </div>
                {
                    painting["Purchased"] === 1
                        ? <p className="failure-message">Sold</p>
                        : <OrderForm ArtID={painting["ArtID"]} />
                }
            </div>
        </div>
    );
}

export default Artwork;