export default function Label({ children, forInput, required = false }) {
    return (
        <label
            htmlFor={forInput}
            className="w-[32%] font-bold truncate text-gray-600">
            {children}
            {required && <span className="text-red-500">*</span>}
        </label>
    )
}