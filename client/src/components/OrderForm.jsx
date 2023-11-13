import { useState } from "react";
import * as yup from 'yup';
import OrderInput from "./OrderInput.jsx";
import OrderResponse from "./OrderResponse.jsx";

export const OrderForm = ({ ArtID }) => {

    const [CustomerName, setCustomerName] = useState("");
    const [CustomerNumber, setCustomerNumber] = useState("");
    const [CustomerEmail, setCustomerEmail] = useState("");
    const [CustomerAddress, setCustomerAddress] = useState("");

    const [formError, setFormError] = useState("");
    const [resJSON, setResJSON] = useState(null);

    const schema = yup.object().shape({
        CustomerName: yup.string().required("Please provide your name!"),
        CustomerNumber: yup.string().required("Please provide your phone number!").matches(/^((\+44)|(0)) ?\d{4} ?\d{6}$/, { message: "Please ensure your phone number is valid!" }), // https://stackoverflow.com/a/66516460/13460028
        CustomerEmail: yup.string().required("Please provide your email address!").email("Please ensure your email address is valid!"),
        CustomerAddress: yup.string().required("Please give an address to deliver to!"),
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
            ArtID: ArtID,
            CustomerName: CustomerName,
            CustomerNumber: CustomerNumber,
            CustomerEmail: CustomerEmail,
            CustomerAddress: CustomerAddress,
        }

        let valid = await validateForm(formData);
        if (!valid) return;

        const res = await fetch("/api/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const resJSON = await res.json();
        setResJSON(resJSON);
        console.log(resJSON === {});
    }

    if (resJSON !== null) {
        return (<OrderResponse apiJSONRes={resJSON} />);
    } else {
        return (
            <>
                <form className="flex flex-col gap-4 self-center items-center">
                    <p><input name="ArtID" type="hidden" value={ArtID} /></p>
                    <OrderInput name="CustomerName" type="text" placeholder="Name" onChange={(e) => setCustomerName(e.target.value)} />
                    <OrderInput name="CustomerNumber" type="tel" placeholder="Phone Number" onChange={(e) => setCustomerNumber(e.target.value)} />
                    <OrderInput name="CustomerEmail" type="email" placeholder="Email" onChange={(e) => setCustomerEmail(e.target.value)} />
                    <OrderInput name="CustomerAddress" type="text" placeholder="Delivery Address" onChange={(e) => setCustomerAddress(e.target.value)} />
                    { formError !== "" ? <p className="my-2 text-center font-bold text-cara-failure">{formError}</p> : "" }
                    <p><button type="button" onClick={attemptOrder} className="bg-cara-violet text-cara-whiter transition hover:bg-cara-magenta hover:cursor-pointer font-bold rounded-xl p-2 w-64">Order</button></p>
                </form>
            </>
        )
    }

}

export default OrderForm;
