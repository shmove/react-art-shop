import './styles/PaintingCard.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import { Spinner } from 'flowbite-react';
import {displayPrice, getImage} from "../utils/artUtils.jsx";

function PaintingCard({ painting }) {

    const [imageSrc, setImageSrc] = useState("");
    useEffect(() => {
        getImage(painting["ArtID"]).then((res) => { setImageSrc(res); });
    }, [painting["ArtID"]]);

    return (
        <Link to = {"/artwork/" + painting["ArtID"]}>
            <div className="card">
                {
                    (imageSrc !== "")
                        ? <img src={imageSrc} alt={painting["Name"]} />
                        : <div className="h-72 flex flex-col justify-center items-center">
                            <Spinner className="h-16 w-16 text-cara-white fill-cara-violet"/>
                        </div>
                }
                <div className="card-content">
                    <div className="card-row">
                        <div className="card-row-important">
                            <h2>{painting["Name"]}</h2>
                        </div>
                        <p>{displayPrice(painting["Price"])}</p>
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default PaintingCard;