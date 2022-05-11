export function ActionButton({ content, bgColor }) {
    return (
        <button className={`py-2 px-4 bg-${bgColor} text-white rounded-lg font-bold`}>
            { content }
        </button>
    )
}