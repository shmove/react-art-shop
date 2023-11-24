import './styles/BasketCard.css';
import {useEffect, useState} from "react";
import {displayPrice, fetchPainting, getImage} from "../pages/PaintingListings.jsx";
import {XMarkIcon} from "@heroicons/react/24/solid/index.js";
import {Link} from "react-router-dom";
import {Spinner} from "flowbite-react";

function BasketCard({ artID, onRemove }) {

    const [painting, setPainting] = useState({});
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        fetchPainting(artID).then((res) => { setPainting(res.data[0]); });
        getImage(artID).then((res) => { setImageSrc(res); });
    }, [artID]);

    return (
        <div className="basket-card">
            <div className="basket-card-content">
                {
                    (painting === {} || imageSrc === "")
                        ?
                        <div className="my-auto flex grow items-center justify-center">
                            <Spinner className="h-16 w-16 text-cara-white fill-cara-violet"/>
                        </div>

                        :
                        <>

                            <Link to={"/artwork/" + painting["ArtID"]}>
                                <div className="basket-card-image">
                                    <img src={imageSrc} alt={painting["Name"]} className="hover-raise" />
                                </div>
                            </Link>
                            <div className="basket-card-info">
                                <h3>{painting["Name"]}</h3>
                                <p>({painting["Width"]} x {painting["Height"]} mm)</p>
                                <p>Estimated completion date: {new Date(painting["CompletionDate"]).toDateString()}</p>
                            </div>
                            <div className="basket-card-cost">
                                {
                                    painting["Purchased"] === 1
                                        ? <h2 className="text-cara-failure">Already Sold</h2>
                                        : <h2>{displayPrice(painting["Price"])}</h2>
                                }

                            </div>

                        </>
                }
            </div>
            <div className="basket-card-remove">
                <div className="hover-raise hover:scale-110 cursor-pointer" onClick={onRemove}>
                    <XMarkIcon className="w-12"/>
                </div>
            </div>
        </div>

    )

}

export default BasketCard;