import {Buffer} from "buffer";

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

export function displayPrice(price) {
    if (price === undefined) return "";
    return "£" + price.toFixed(2);
}