import React from "react";
import LabelIcon from "@components/LabelGroup/iconLabel"
import IconLabel from "@components/LabelGroup/iconLabel";
import { IconName } from "@components/Icons";


interface PostData {
    img_href: string,
    status: string,
    title: string,
    description: string,
    location: string,
    fee: string
}



export default class PostCard extends React.Component<{ data: PostData }> {
    render() {
        return (
            <div className="bg-white rounded-2xl w-64 p-2 m-3 shadow-md cursor-pointer hover:shadow-lg transition-all">
                <div className="h-36 relative">
                    <div className="h-full overflow-hidden rounded-2xl shadow-md">
                        <img src={this.props.data.img_href} alt="post-image" className="object-scale-down" />
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-1 px-3 absolute -bottom-3 right-3 z-30 shadow-md">
                        <p className="text-blue-500 font-semibold ">{this.props.data.status}</p>
                    </div>
                </div>
                <div className="mt-4 mx-2">
                    <h1 className="font-semibold text-gray-600">{this.props.data.title}</h1>
                    <div className="mt-2">
                        <IconLabel icon={IconName.Location1} value={this.props.data.location} is_small />
                        <IconLabel icon={IconName.Coin} value={this.props.data.fee} is_small/>
                    </div>
                </div>
            </div>
        );
    }
}
