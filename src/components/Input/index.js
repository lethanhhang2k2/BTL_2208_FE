export default function Input({ type = "text", placeholder = "", name, required = false }) {
    return (
        <div className="w-full bg-gray-150 rounded-lg h-fit">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className="w-full outline-none p-2 bg-transparent focus:outline-4 focus:outline-violet/40 rounded-lg"
                required={required}
            />
        </div>
    )
}