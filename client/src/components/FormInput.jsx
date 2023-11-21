export const FormInput = ({ name, type, placeholder, onChange, step }) => {
    return (
        <>
            <input
                name={name} type={type} placeholder={placeholder} step={step} onChange={onChange}
                className="border-2 bg-cara-whiter border-cara-violet rounded-xl p-2 w-64"
            />
        </>
    )
}

export default FormInput;