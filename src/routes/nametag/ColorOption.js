export default function ColorOption({ color = "black", borderWidth = "2", handleColor }) {
    return (
        <div
            className={`w-[40px] h-[40px] rounded-full border-${borderWidth} border-solid border-white cursor-pointer hover:shadow-sm`}
            style={{ background: color }}
            onClick={handleColor}
        >

        </div>
    )
}