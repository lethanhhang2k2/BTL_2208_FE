export function ActionButton({ type="button", content, bgColor, onClick = () => {} }) {
    return (
        <button type={type} onClick={onClick} className={`py-2 px-4 bg-${bgColor} text-white rounded-lg font-bold hover:opacity-80 transition ease-in-out`}>
            { content }
        </button>
    )
}