import React from "react";
import User from "@components/User";
import ContactBar from "./ContactBar";
import MotelInfo from "./MotelInfo";
import { ThemeColor, AvatarSize, UserExample } from "@AppTypes/user";
import { MotelExample } from "@AppTypes/motel";

export default class GuyCard extends React.Component<{ theme?: ThemeColor }> {
    render() {
        const { theme } = this.props
        return (
            <div className="w-[320px] bg-white rounded-xl p-2">
                <div className="h-40 overflow-hidden rounded-xl">
                    <img
                        src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg"
                        className="object-scale-down rounded-lg"
                    />
                </div>

                <div className="flex flex-col justify-between">
                    <div className="-mt-[12px]">
                        <User
                            user={UserExample}
                            sizeAvt={AvatarSize.Large}
                            border={true}
                            showRole={true}
                            twoLine={true} />
                    </div>
                    <div className="flex justify-center mb-4 mt-3">
                        <ContactBar />
                    </div>
                </div>
                <div className="h-36 rounded-lg">
                    <MotelInfo motel={MotelExample} theme={theme} />
                </div>
            </div>
        );
    }
}