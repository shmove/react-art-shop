import './styles/PaintingListings.css';
import PaintingCard from "../components/PaintingCard.jsx";
import {useEffect, useState} from "react";
import PageSelector from "../components/PageSelector.jsx";
import {Spinner} from "flowbite-react";
import {fetchPaintingCount, fetchPaintings} from "../utils/artUtils.jsx";

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

    if (paintingCount === 0) return (
        <div id="empty-notif">
            <p><em>There are no paintings available for sale.</em></p>
        </div>
    )
    else return (
        <>
            <PageSelector currentPage={page} totalPages={paintingCount} setPage={setPage} />
            <div className="paintings-grid">
                { paintings.map((painting) => { return <PaintingCard key={painting["ArtID"]} painting={painting} />; }) }
            </div>
        </>
    )

}

export default PaintingListings;