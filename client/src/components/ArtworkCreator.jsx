import './styles/ArtworkCreator.css';
import {useState} from "react";
import * as yup from 'yup';
import FormInput from "./FormInput.jsx";
import OrderResponse from "./OrderResponse.jsx";

function ArtworkCreator({ apiPass }) {

    const [ArtworkName, setArtworkName] = useState("");
    const [ArtworkCompletionDate, setArtworkCompletionDate] = useState(undefined);
    const [ArtworkWidth, setArtworkWidth] = useState(0);
    const [ArtworkHeight, setArtworkHeight] = useState(0);
    const [ArtworkPrice, setArtworkPrice] = useState(0);
    const [ArtworkDescription, setArtworkDescription] = useState("");
    const [ArtworkImage, setArtworkImage] = useState(null);

    const [previewSrc, setPreviewSrc] = useState("");

    const [formError, setFormError] = useState("");

    const [resJSON, setResJSON] = useState(null);

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setArtworkImage(e.target.files[0]);
            setPreviewSrc(URL.createObjectURL(e.target.files[0]));
        }
    }

    const resetForm = () => {
        setArtworkName("");
        setArtworkCompletionDate(undefined);
        setArtworkWidth(0);
        setArtworkHeight(0);
        setArtworkPrice(0);
        setArtworkDescription("");
        setArtworkImage(null);
        setFormError("");
        setPreviewSrc("");
        setResJSON(null);
    }

    // Input Validation

    const schema = yup.object().shape({
        ArtworkName: yup.string()
            .required("Please provide a name for this piece!")
            .max(255, "Please ensure the name is within 255 characters long!"),
        ArtworkCompletionDate: yup.date()
            .required("Please provide a completion date for this piece!"),
        ArtworkWidth: yup.number()
            .min(1, "Please provide a positive non-zero width for this piece! (in mm)"),
        ArtworkHeight: yup.number()
            .min(1, "Please provide a positive non-zero height for this piece! (in mm)"),
        ArtworkPrice: yup.number()
            .required("Please provide a price for this piece!")
            .moreThan(0, "Please ensure the price is greater than zero!")
            .test("is-valid-price", "Please ensure the price is a valid number!", value => (value + "").match(/^\d*(\.\d{0,2})?$/)),
        ArtworkDescription: yup.string()
            .required("Please provide a description of this piece!")
            .max(1024, "Please ensure the description is within 1024 characters long!"),
        ArtworkImage: yup.mixed()
            .required("Please provide an image of this piece!"),
    });

    async function validateForm(formData) {
        const validationRes = await schema
            .validate(formData, { abortEarly: false })
            .catch((err) => {
                return err;
            });

        let valid = validationRes.errors === undefined;
        setFormError(valid ? "" : validationRes.errors[0]);
        return valid;
    }

    // API Requests

    async function attemptAddArtwork() {

        // https://stackoverflow.com/a/57272491/13460028
        const toBase64 = image => new Promise((resolve, reject) => {
            if (image === null) resolve(null);
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });

        let formData = {
            ArtworkName: ArtworkName,
            ArtworkCompletionDate: ArtworkCompletionDate,
            ArtworkWidth: ArtworkWidth,
            ArtworkHeight: ArtworkHeight,
            ArtworkPrice: ArtworkPrice,
            ArtworkDescription: ArtworkDescription,
            ArtworkImage: await toBase64(ArtworkImage),
        }

        let valid = await validateForm(formData);
        if (!valid) return;

        const res = await fetch(import.meta.env.VITE_BASE_URL + "/api/art", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa(apiPass),
            },
            body: JSON.stringify(formData),
        });

        const json = await res.json();
        setResJSON(json);
    }

    // Render

    if (resJSON !== null) {
        return (
            <>
                <OrderResponse apiJSONRes={resJSON} successMessage="Artwork creation successful!" />
                <button type="button" onClick={resetForm} className="w-64">Add another</button>
            </>
        );
    } else {
        return (
            <form>
                <div className="form-content">
                    <div className="form-inputs">
                        <FormInput name="Name" type="text" placeholder="Artwork Name" onChange={(e) => setArtworkName(e.target.value)} />
                        <FormInput name="CompletionDate" type="date" placeholder="Completion Date" onChange={(e) => setArtworkCompletionDate(e.target.value)} />
                        <FormInput name="Width" type="number" placeholder="Width (mm)" onChange={(e) => setArtworkWidth(e.target.value)} />
                        <FormInput name="Height" type="number" placeholder="Height (mm)" onChange={(e) => setArtworkHeight(e.target.value)} />
                        <FormInput name="Price" type="number" step=".01" placeholder="Price" onChange={(e) => setArtworkPrice(e.target.value)} />
                        <FormInput name="Description" type="text" placeholder="Description" onChange={(e) => setArtworkDescription(e.target.value)} />
                    </div>
                    <div className="form-image-input">
                        <div className="preview">
                            {
                                previewSrc === ""
                                    ? ""
                                    : <img src={previewSrc} alt="Preview" />
                            }
                        </div>
                        <FormInput name="Image" type="file" placeholder="Image" onChange={onImageChange} accept="image/*" />
                    </div>
                </div>
                <button type="button" onClick={attemptAddArtwork}>Add</button>
                { formError !== "" ? <p className="failure">{formError}</p> : "" }
            </form>
        )
    }

}

export default ArtworkCreator;