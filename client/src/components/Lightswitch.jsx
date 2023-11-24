import './styles/Lightswitch.css';
import {useState} from "react";

const Lightswitch = ({ left, right, onLeft, onRight }) => {

    const [flicked, setFlicked] = useState(false);

    function handleLeft() {
        if (!flicked) return;
        setFlicked(false);
        onLeft();
    }

    function handleRight() {
        if (flicked) return;
        setFlicked(true);
        onRight();
    }

    return (
        <div className="lightswitch">
            <div className={"rounded-l-lg" + ((!flicked) ? " flicked" : "")} onClick={handleLeft}>
                <p>{left}</p>
            </div>
            <div className={"rounded-r-lg" + ((flicked) ? " flicked" : "")} onClick={handleRight}>
                <p>{right}</p>
            </div>
        </div>
    )
}

export default Lightswitch;