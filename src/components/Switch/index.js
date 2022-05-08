export default function Switch({ name }) {
    return (
        <label className="flex items-center cursor-pointer mx-[5%]">
            <div className="relative">

            <input type="checkbox" className="switch sr-only" name={name} />

            <div className="line block bg-violet w-[68px] h-[32px] rounded-full transition"></div>

            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all duration-500"></div>
        </div>
        </label >
    )
}