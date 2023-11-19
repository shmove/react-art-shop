import {useEffect, useState} from "react";
import {Buffer} from 'buffer';

export function ImageComponent ({ artID }) {

    const [imageSrc, setImageSrc] = useState("");

    async function updateImageSrc(artID) {
        const res = await fetch("/api/art/images?id=" + artID);
        const json = await res.json();
        if (json.data[0].Image === null) return;
        const data = json.data[0].Image.data;
        const base64 = "data:image/png;base64," + Buffer.from(data).toString('base64');
        setImageSrc(base64);
    }

    useEffect(() => { updateImageSrc(artID); }, [artID]);

    return (
        <>
            {
                imageSrc === ""
                    ? <img src="/images/temp-750x750.png" alt="Placeholder Image" className="placeholder-image" />
                    : <img src={imageSrc} alt="Artwork Image" />
            }
        </>
    )
}

export default ImageComponent;