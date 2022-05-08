export default function ButtonLink({ contentButton, active, handleOptionLink }) {
    return (
        <div className="">
            <button className={`text-[16px] text-white hover:border-b-2 hover:border-white hover:border-solid ${active && "font-bold border-b-2 border-white border-solid"}`} onClick={handleOptionLink}>
                { contentButton }
            </button>
        </div>
    )
}