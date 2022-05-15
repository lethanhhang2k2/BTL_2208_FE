import React from "react";
import MotelCard from "@components/MotelCard";
import { MotelProperty, MotelExample } from "@AppTypes/motel"
import { ThemeColor } from "@AppTypes/user";
import Icons, { IconName } from "@components/Icons";

interface MotelInfoProps {
    motel: MotelProperty
    theme?: ThemeColor
}

export default class MotelInfo extends React.Component<MotelInfoProps, {}> {
    render() {
        const { theme = ThemeColor.Orange, motel = MotelExample } = this.props
        return (
            <div className={`p-4 flex flex-col justify-between h-full text-white z-10 relative before:content-[' '] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:object-cover before:rounded-lg before:opacity-40 before:-z-10 before:bg-[url('https://o.rada.vn/data/image/2020/02/25/adorable-home-bedroom-3.jpg')]`}>
                <p className="h-1/4 text-[20px] font-bold">{motel.title}</p>
                <div className="h-2/3 flex flex-col justify-between">
                    <div className="flex">
                        <Icons iconName={IconName.User1} stroke="white" />
                        {motel.owner.name}
                    </div>
                    <div className="flex w-3/5 justify-between">
                        <div className="flex">
                            <Icons iconName={IconName.Location1} stroke="white" />
                            {motel.address}
                        </div>
                        <div className="flex">
                            <Icons iconName={IconName.Coin} stroke="white" />
                            {motel.fee}
                        </div>
                    </div>
                    <div className="flex">
                        <Icons iconName={IconName.InfoCircle} stroke="white" />
                        {motel.description}
                    </div>
                </div>
                <div
                    className="absolute top-0 left-0 w-full h-full z-0 rounded-lg overflow-hidden opacity-80"
                    style={{
                        backgroundColor: "transparent",
                        background: theme
                    }}>
                </div>
                <MotelCard motel={motel} />
            </div>
        )
    }
}