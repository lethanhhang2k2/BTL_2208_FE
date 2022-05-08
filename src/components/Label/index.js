export default function Label({ children, forInput }) {
    return (
        <label
            htmlFor={forInput}
            className="w-[32%]"
        >
            { children }
        </label>
    )
}