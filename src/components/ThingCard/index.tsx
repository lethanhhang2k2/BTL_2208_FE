import React from "react"
import { MotelProperty, MotelExample } from "../../types/motel"
import Icons, { IconName } from "../Icons"

interface IThingCard {
    motel: MotelProperty
}

export default function ThingCard({ motel = MotelExample } : IThingCard) {
        return (
            <div className="bg-white w-[320px] p-2 rounded-lg relative">
                <div>
                    <img src={motel.illustrationHref[0]} className="rounded-lg h-2/3 w-full object-cover" />
                </div>
                <div className="flex justify-end -mt-[16px]">
                    <div className="flex mr-2 text-green bg-bggreen px-2 rounded-full text-[12px] h-[32px] font-bold w-2/5 items-center justify-center">{motel.status}</div>
                </div>
                <div className="px-2 absolute bottom-4">
                    <div className="text-[20px] font-bold">{motel.name}</div>
                    <div className="flex flex-col justify-between text-gray-160">
                        <div className="flex">
                            <Icons iconName={IconName.User1} stroke="#CCCCCC" />
                            {motel.owner.name}
                        </div>
                        <div className="flex w-3/5 justify-between">
                            <div className="flex">
                                <Icons iconName={IconName.Location1} stroke="#CCCCCC" />
                                {motel.address}
                            </div>
                            <div className="flex">
                                <Icons iconName={IconName.Coin} stroke="#CCCCCC" />
                                {motel.fee}
                            </div>
                        </div>
                        <div className="flex">
                            <Icons iconName={IconName.InfoCircle} stroke="#CCCCCC" />
                            {motel.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }