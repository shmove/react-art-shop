import PaintingCard from "../components/PaintingCard.jsx";
import {useLoaderData} from "react-router-dom";

export async function fetchPaintings({ params }) {
    const res = await fetch("/api/art" + (params.id ? "?id=" + params.id : ""));
    const json = await res.json();
    const data = json.data;
    return { data };
}

function PaintingListings() {

    const { data } = useLoaderData();

    return (
        <div className="columns-3 mx-36 gap-8">
            { data.map((painting) => PaintingCard(painting)) }
        </div>
    )

}

export default PaintingListings;