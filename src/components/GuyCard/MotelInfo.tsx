import React from "react";
import Icons, { IconName } from "../Icons"
import { MotelProperty, MotelExample } from "../../types/motel"

interface MotelInfoProps {
    motel: MotelProperty
}

export default class MotelInfo extends React.Component<MotelInfoProps, {}> {
    render() {
        const { motel = MotelExample } = this.props
        return (
            <div className={`p-4 flex flex-col justify-between h-full text-white z-10 relative before:content-[' '] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:object-cover before:rounded-lg before:opacity-40 before:-z-10 before:bg-[url('https://o.rada.vn/data/image/2020/02/25/adorable-home-bedroom-3.jpg')]`}>
                <p className="h-1/4 text-[20px] font-bold">{motel.name}</p>
                <div className="h-2/3 flex flex-col justify-between">
                    <div className="flex">
                        <Icons iconName={IconName.User1} color="white" />
                        {motel.owner}
                    </div>
                    <div className="flex w-3/5 justify-between">
                        <div className="flex">
                            <Icons iconName={IconName.Location1} color="white" />
                            {motel.address}
                        </div>
                        <div className="flex">
                            <Icons iconName={IconName.Coin} color="white" />
                            {motel.fee}F
                        </div>
                    </div>
                    <div className="flex">
                        <Icons iconName={IconName.InfoCircle} color="white" />
                        {motel.description}
                    </div>
                </div>
            </div>
        )
    }
}