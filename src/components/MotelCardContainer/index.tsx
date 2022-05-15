import React from "react"
import { MotelProperty, MotelExample } from "@AppTypes/motel"
import MotelCard from "@components/MotelCard"

export default class ThingCard extends React.Component<MotelProperty> {
    render() {
        const motel = MotelExample || this.props
        return (
            <div className="bg-white w-[320px] p-2 rounded-xl mr-10 mt-10 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden">
                <div className="h-40 overflow-hidden rounded-lg ">
                    <img src={motel.images[0]} className="object-scale-down" />
                </div>
                <MotelCard motel={motel} isGrayColor/>
            </div>
        )
    }
};