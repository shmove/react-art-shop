import './styles/OrderForm.css';
import { useState } from "react";
import * as yup from 'yup';
import FormInput from "./FormInput.jsx";

export const OrderForm = ({ ArtIDList, onOrder }) => {

    const [CustomerName, setCustomerName] = useState("");
    const [CustomerNumber, setCustomerNumber] = useState("");
    const [CustomerEmail, setCustomerEmail] = useState("");
    const [CustomerAddress, setCustomerAddress] = useState("");

    const [formError, setFormError] = useState("");

    const schema = yup.object().shape({
        CustomerName: yup.string()
            .required("Please provide your name!"),
        CustomerNumber: yup.string()
            .required("Please provide your phone number!")
            .matches(/^((\+44)|(0)) ?\d{4} ?\d{6}$/, { message: "Please ensure your phone number is valid!" }), // https://stackoverflow.com/a/66516460/13460028
        CustomerEmail: yup.string()
            .required("Please provide your email address!")
            .email("Please ensure your email address is valid!"),
        CustomerAddress: yup.string()
            .required("Please give an address to deliver to!"),
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

    async function attemptOrder() {
        let formData = {
            ArtIDList: ArtIDList,
            CustomerName: CustomerName,
            CustomerNumber: CustomerNumber,
            CustomerEmail: CustomerEmail,
            CustomerAddress: CustomerAddress,
        }

        let valid = await validateForm(formData);
        if (!valid) return;

        const res = await fetch(import.meta.env.VITE_BASE_URL + "/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const resJSON = await res.json();
        onOrder(resJSON);
    }

    return (
        <>
            <form>
                <p><FormInput name="CustomerName" type="text" placeholder="Name" onChange={(e) => setCustomerName(e.target.value)} /></p>
                <p><FormInput name="CustomerNumber" type="tel" placeholder="Phone Number" onChange={(e) => setCustomerNumber(e.target.value)} /></p>
                <p><FormInput name="CustomerEmail" type="email" placeholder="Email" onChange={(e) => setCustomerEmail(e.target.value)} /></p>
                <p><FormInput name="CustomerAddress" type="text" placeholder="Delivery Address" onChange={(e) => setCustomerAddress(e.target.value)} /></p>
                { formError !== "" ? <p className="failure">{formError}</p> : "" }
                <p><button type="button" onClick={attemptOrder}>Order</button></p>
            </form>
        </>
    )

}

export default OrderForm;
