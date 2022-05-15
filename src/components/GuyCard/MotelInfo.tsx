import React from "react";
import MotelCard from "@components/MotelCard";
import { MotelProperty, MotelExample } from "@AppTypes/motel"
import { ThemeColor } from "@AppTypes/user";

interface MotelInfoProps {
    motel: MotelProperty
    theme?: ThemeColor
}

export default class MotelInfo extends React.Component<MotelInfoProps, {}> {
    render() {
        const { theme = ThemeColor.Orange, motel = MotelExample } = this.props
        return (
            <div className={`flex flex-col justify-between h-full relative`}>
                <div className="absolute top-0 left-0 w-full h-full z-0 rounded-lg overflow-hidden">
                    <img src={motel.images[0]} alt="motel picture"></img>
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