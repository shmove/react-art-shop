export const FormInput = ({ name, type, placeholder, onChange, step, accept }) => {
    return (
        <>
            <input
                name={name} type={type} placeholder={placeholder} step={step} onChange={onChange} accept={accept}
                className="border-2 bg-cara-whiter border-cara-violet rounded-xl p-2 w-64"
            />
        </>
    )
}

export default FormInput;