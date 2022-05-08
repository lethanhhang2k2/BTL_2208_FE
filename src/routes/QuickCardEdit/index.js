import { useEffect, useState } from "react";
import { ThemeColor, UserExample } from "../../type/user";
import GuyCard from "../../components/GuyCard";
import ThingCard from "../../components/ThingCard";
import BgEditLayout from "../../layouts/AuthLayout/BgEditLayout";
import { MotelExample } from "../../type/motel";

const motels = [
    MotelExample,
    MotelExample
]

export default function QuickCardEdit({ user = { ...UserExample } }) {
    const [bgColor, setBgColor] = useState({})

    useEffect(() => {
        setBgColor({
            id: user.theme,
            color: ThemeColor[user.theme]
        })
    }, [])

    return (
        <BgEditLayout
            user={user}
            backgroundColor={bgColor.color}
        >
            <div className="flex w-3/4 justify-between">
                <div className="w-1/3">
                    <GuyCard user={user} />
                </div>
                <div className="w-3/5 h-3/4 py-2 flex flex-col justify-between">
                    <div className="text-3xl text-white">
                        Quick link helps people have an overview about you
                    </div>
                    <div className="border-2 border-solid border-white rounded-full w-3/5">
                        <input className="focus:outline-none bg-transparent p-2 text-white w-full mx-2" type="text"></input>
                    </div>
                    <div className="flex h-2/3 w-full justify-between">
                        {motels.map(motel => <ThingCard key={motel.id} motel={motel} />)}
                    </div>
                </div>
            </div>
        </BgEditLayout>
    )
}