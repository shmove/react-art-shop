import { useFormContext } from "react-hook-form";

export const OrderForm = ({ ArtID }) => {

    const methods = useForm(); // see here and do later please: https://www.freecodecamp.org/news/how-to-validate-forms-in-react/

    return (
        <FormProvider {...methods}>
        </FormProvider>
        <form className="flex flex-col gap-4 self-center" action="/api/order" method="POST">
            <p><input name="ArtID" type="hidden" value={ArtID} /></p>
            <p><input name="CustomerName" type="text" placeholder="Name" /></p>
            <p><input name="CustomerNumber" type="tel" placeholder="Phone Number" /></p>
            <p><input name="CustomerEmail" type="email" placeholder="Email" /></p>
            <p><input name="CustomerAddress" type="text" placeholder="Delivery Address" /></p>
            <p><input type="submit" className="bg-cara-violet text-cara-whiter transition hover:bg-cara-magenta hover:cursor-pointer font-bold rounded-xl p-2 w-full" value="Order" /></p>
        </form>
    )
}

export default OrderForm;
