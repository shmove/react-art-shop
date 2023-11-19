import './PaintingCard.css'
import {Link} from "react-router-dom";
import ImageComponent from "./ImageComponent.jsx";

function PaintingCard(painting) {
    if (painting["Purchased"]) return null;
    return (
        <Link to = {"/artwork/" + painting["ArtID"]}>
            <div className="painting-card">
                <ImageComponent artID={painting["ArtID"]} />
                <div className="painting-card-content">
                    <div className="painting-card-row">
                        <div className="painting-card-row-important">
                            <h2>{painting["Name"]}</h2>
                            {/*<h3>({painting["Width"]} x {painting["Height"]} mm)</h3>*/}
                        </div>
                        <p>£{painting["Price"]}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PaintingCard;