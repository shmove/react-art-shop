import PaintingCard from "../components/PaintingCard.jsx";
import {useEffect, useState} from "react";
import PageSelector from "../components/PageSelector.jsx";
import {Buffer} from "buffer";

export async function fetchPaintingCount() {
    const res = await fetch("/api/");
    const json = await res.json();
    const data = json.data;
    return { data };

}

export async function fetchPaintings(page) {
    const res = await fetch("/api/art?page=" + page);
    const json = await res.json();
    const data = json.data;
    return { data };
}

export async function fetchPainting(id) {
    const res = await fetch("/api/art?id=" + id);
    const json = await res.json();
    const data = json.data;
    return { data };
}

export async function getImage(artID, setFunc) {
    setFunc("");
    const res = await fetch("/api/art/images?id=" + artID);
    const json = await res.json();
    if (json.data[0].Image === null) return;
    const data = json.data[0].Image.data;
    const image = "data:image/png;base64," + Buffer.from(data).toString('base64');
    setFunc(image);
}

function PaintingListings() {

    const [page, setPage] = useState(1);
    const [paintings, setPaintings] = useState([]);
    const [paintingCount, setPaintingCount] = useState(0);

    // Fetch painting count on page load
    useEffect(() => {
        fetchPaintingCount().then((res) => { setPaintingCount(Math.ceil(res.data.NumberOfArtworks / 12)); });
    }, []);

    // Fetch paintings on page change
    useEffect(() => {
        fetchPaintings(page).then((res) => { setPaintings(res.data); });
    }, [page]);

    return (
        <>
            <PageSelector currentPage={page} totalPages={paintingCount} setPage={setPage} />
            <div className="columns-3 mx-72 gap-8">
                { paintings.map((painting) => { return <PaintingCard {...painting} />; }) }
            </div>
        </>

    )

}

export default PaintingListings;