import './PaintingCard.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getImage} from "../pages/PaintingListings.jsx";
import { Spinner } from 'flowbite-react';

function PaintingCard(painting) {

    const [imageSrc, setImageSrc] = useState("");
    useEffect(() => { getImage(painting["ArtID"], setImageSrc); }, [painting["ArtID"]]);

    return (
        <Link to = {"/artwork/" + painting["ArtID"]}>
            <div className="card">
                {
                    (imageSrc !== "")
                        ? <img src={imageSrc} alt={painting["Description"]} />
                        : <div className="h-72 flex flex-col justify-center items-center">
                            <Spinner className="h-16 w-16 text-cara-white fill-cara-violet"/>
                        </div>
                }
                <div className="card-content">
                    <div className="card-row">
                        <div className="card-row-important">
                            <h2>{painting["Name"]}</h2>
                        </div>
                        <p>£{painting["Price"]}</p>
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default PaintingCard;