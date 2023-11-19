import PaintingCard from "../components/PaintingCard.jsx";
import {useEffect, useState} from "react";
import PageSelector from "../components/PageSelector.jsx";

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
                { paintings.map((painting) => PaintingCard(painting)) }
            </div>
        </>

    )

}

export default PaintingListings;