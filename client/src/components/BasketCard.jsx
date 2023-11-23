import {useEffect, useState} from "react";
import {fetchPainting, getImage} from "../pages/PaintingListings.jsx";
import {XMarkIcon} from "@heroicons/react/24/solid/index.js";
import {Link} from "react-router-dom";

function BasketCard({ artID, onRemove }) {

    const [painting, setPainting] = useState({});
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        fetchPainting(artID).then((res) => { setPainting(res.data[0]); });
        getImage(artID).then((res) => { setImageSrc(res); });
    }, [artID]);

    return (
        <div className="flex flex-row w-full h-32">
            <div className="flex flex-row w-full p-1 bg-cara-whiter rounded-xl rounded-r-none gap-4">
                <Link className="flex basis-1/3 rounded-l-xl overflow-clip" to={"/artwork/" + painting["ArtID"]}>
                    <img src={imageSrc} alt={painting["Description"]} className="w-full object-cover hover-raise" />
                </Link>
                <div className="flex flex-col flex-grow justify-center">
                    <h3>{painting["Name"]}</h3>
                    <p>{painting["Description"]}</p>
                    <p>Estimated completion date: {new Date(painting["CompletionDate"]).toDateString()}</p>
                </div>
                <div className="flex flex-col justify-center p-4">
                    {
                        painting["Purchased"] === 1
                        ? <h2 className="text-cara-failure">Already Sold</h2>
                        : <h2>£{painting["Price"]}</h2>
                    }

                </div>
            </div>
            <div className="flex flex-col w-1/6 bg-cara-offwhite rounded-xl rounded-l-none items-center justify-center">
                <div className="hover-raise hover:scale-110 cursor-pointer" onClick={onRemove}>
                    <XMarkIcon className="h-12 w-12 fill-cara-magenta"/>
                </div>
            </div>
        </div>

    )

}

export default BasketCard;