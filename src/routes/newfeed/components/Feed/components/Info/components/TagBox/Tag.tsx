import React from "react"
import Icons, { IconName } from "@components/Icons"

export default function Tag({ iconName, value }: { iconName: IconName, value: string }) {
    return (
        <div className="bg-[#6DB0FF] h-[30px] rounded-full flex items-center w-fit px-2 mr-[10px] text-white cursor-pointer">
            <Icons iconName={iconName} stroke="white" strokeWidth="2px"/>
            <p className="ml-2 mr-2">{value}</p>
        </div>
    )
}