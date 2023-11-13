export const OrderInput = ({ name, type, placeholder, onChange }) => {
    return (
        <p><input
            name={name} type={type} placeholder={placeholder} onChange={onChange}
            className="border-2 bg-cara-whiter border-cara-violet rounded-xl p-2 w-64"
        /></p>
    )
}

export default OrderInput;