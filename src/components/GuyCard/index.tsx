import React from "react";
import Avatar from "../Avatar";
import User from "../User";
import ContactBar from "./ContactBar";
import MotelInfo from "./MotelInfo";
import { UserProperty, ThemeColor, UserRole, AvatarSize, UserExample } from "../../type/user";
import { MotelExample, MotelProperty } from "../../type/motel";
import { userInfo } from "os";

interface IGuyCard {
    user: UserProperty,
}

export default function GuyCard({ user = UserExample }: IGuyCard) {

    return (
        <div className="h-3/4 w-[320px] bg-white rounded-lg p-2">
            <div className="h-1/3">
                <img
                    src="https://docs.microsoft.com/en-us/windows/apps/design/controls/images/image-licorice.jpg"
                    className="object-cover h-full w-full rounded-lg"
                />
            </div>
            <div className="h-1/4 flex flex-col justify-between">
                <div className="-mt-[12px]">
                    <User
                        user={user}
                        sizeAvt={AvatarSize.Medium}
                        border={true}
                        showRole={true}
                        twoLine={true}
                    />
                </div>
                <div className="flex justify-center mb-4">
                    <ContactBar />
                </div>
            </div>
            <div className="h-2/5 rounded-lg" style={{ background:  ThemeColor[user.theme] }}>
                <MotelInfo motel={MotelExample} />
            </div>
        </div>
    );
}