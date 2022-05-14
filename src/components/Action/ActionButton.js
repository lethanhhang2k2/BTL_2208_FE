export function ActionButton({ content, bgColor }) {
    return (
        <button className={`py-2 px-4 bg-${bgColor} text-white rounded-lg font-bold hover:opacity-80 transition ease-in-out`}>
            { content }
        </button>
    )
}