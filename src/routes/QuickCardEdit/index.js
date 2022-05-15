import { useEffect, useState } from "react";
import { ThemeColor } from "@AppTypes/user";
import GuyCard from "@components/GuyCard";
import MotelCardContainer from "@components/MotelCardContainer";
import BgEditLayout from "@layouts/AuthLayout/components/BgEditLayout";
import { MotelExampleList, MotelProperty } from "@AppTypes/motel";

const motels = MotelExampleList;

export default function QuickCardEdit({ user = { theme: "red" } }) {
    const [bgColor, setBgColor] = useState({})

    useEffect(() => {
        setBgColor({
            id: user.theme,
            color: ThemeColor.Violet
        })
    }, [])

    return (
        <BgEditLayout backgroundColor={bgColor.color}>
            <div className="flex w-3/4 justify-between flex-col lg:flex-row">
                <div className="w-full lg:w-1/3">
                    <div className="mx-auto w-fit">
                    <GuyCard theme={bgColor.theme} />
                    </div>
                </div>

                <div className="w-3/5 h-3/4 py-2 flex flex-col justify-between mt-10 lg:mt-0">
                    <div className="text-3xl text-white">
                        Quick link helps people have an overview about you
                    </div>
                    <div className="border-2 border-solid border-white rounded-full w-3/5 mt-3">
                        <input 
                        className="focus:outline-none bg-transparent p-2 text-white w-full mx-2 placeholder-white" 
                        type="text"
                        placeholder="Search" />
                    </div>
                    <div className="flex w-full my-14 flex-wrap">
                        {motels.map(motel => <MotelCardContainer motel={motel} />)}
                    </div>
                </div>
            </div>
        </BgEditLayout>
    )
}