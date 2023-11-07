import './PaintingCard.css'
import {Link} from "react-router-dom";

export function randomTempImage() {
    const images = [
        "/images/temp-500x750.png",
        "/images/temp-750x500.png",
        "/images/temp-750x750.png",
    ]
    return images[Math.floor(Math.random() * images.length)];
}

function PaintingCard(painting) {
    if (painting["Purchased"]) return null;
    return (
        <Link to = {"/artwork/" + painting["ArtID"]}>
            <div className="painting-card">
                <img src={randomTempImage()}/>
                <div className="painting-card-content">
                    <div className="painting-card-row">
                        <div className="painting-card-row-important">
                            <h2>{painting["Name"]}</h2>
                            <h3>({painting["Width"]} x {painting["Height"]} mm)</h3>
                        </div>
                        <p>"{painting["Description"]}"</p>
                    </div>
                    <div className="painting-card-row mt-4">
                        <h4>Estimated completion date: {new Date(painting["CompletionDate"]).toDateString()}</h4>
                        <h2>£{painting["Price"]}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PaintingCard;