import PaintingCard from "../components/PaintingCard.jsx";
import {useEffect, useState} from "react";
import PageSelector from "../components/PageSelector.jsx";
import {Buffer} from "buffer";
import {Spinner} from "flowbite-react";

export async function fetchPaintingCount() {
    const res = await fetch(import.meta.env.VITE_BASE_URL + "/api/");
    const json = await res.json();
    const data = json.data;
    return { data };

}

export async function fetchPaintings(page) {
    const res = await fetch(import.meta.env.VITE_BASE_URL + "/api/art?page=" + page + "&unsold=true"); // get paintings that are for sale
    const json = await res.json();
    const data = json.data;
    return { data };
}

export async function fetchPainting(id) {
    const res = await fetch(import.meta.env.VITE_BASE_URL + "/api/art?id=" + id);
    const json = await res.json();
    const data = json.data;
    return { data };
}

export async function getImage(artID) {
    const res = await fetch(import.meta.env.VITE_BASE_URL + "/api/art/images?id=" + artID);
    const json = await res.json();
    if (json.data[0].Image === null) return null;
    const data = json.data[0].Image.data;
    // Base64 encoded image
    const def = Buffer.from(data).toString();
    if (def.startsWith("data:image/")) return def;
    else {
        // Image is not base64 encoded
        return "data:image/png;base64," + Buffer.from(data).toString('base64');
    }

}

function PaintingListings() {

    const [page, setPage] = useState(1);
    const [paintings, setPaintings] = useState([]);
    const [paintingCount, setPaintingCount] = useState(-1);

    // Fetch painting count on page load
    useEffect(() => {
        fetchPaintingCount().then((res) => { setPaintingCount(Math.ceil(res.data.NumberOfAvailableArtworks / 12)); });
    }, []);

    // Fetch paintings on page change
    useEffect(() => {
        fetchPaintings(page).then((res) => { setPaintings(res.data); });
    }, [page]);

    if (paintingCount === -1) return (
        <div className="my-auto flex items-center justify-center">
            <Spinner className="h-32 w-32 text-cara-whiter fill-cara-violet"/>
        </div>
    );

    return (
        <>
            <PageSelector currentPage={page} totalPages={paintingCount} setPage={setPage} />
            <div className="columns-3 mx-72 gap-8">
                { paintings.map((painting) => { return <PaintingCard painting={painting} />; }) }
            </div>
        </>

    )

}

export default PaintingListings;