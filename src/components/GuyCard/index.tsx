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
    quickCard: boolean
}

export default function GuyCard({ user = UserExample, quickCard = true }: IGuyCard) {

    return (
        <div className="h-3/4 w-[320px] bg-white rounded-lg p-2 shadow-md relative justify-between flex flex-col">
            <div className="h-1/3">
                <img
                    src="https://docs.microsoft.com/en-us/windows/apps/design/controls/images/image-licorice.jpg"
                    className="object-cover h-full w-full rounded-lg"
                />
            </div>
            <div className="h-1/4 flex flex-col justify-between">
                <div className="-mt-[12px] mb-2">
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
            {quickCard ? (
                <div className="h-2/5 rounded-lg" style={{ background:  ThemeColor[user.theme] }}>
                    <MotelInfo motel={MotelExample} />
                </div>
            ) : (
                    <div className="flex w-full justify-evenly text-[20px] text-gray-160 h-2/5 items-center">
                        <div className="bg-gray-160/20 rounded-lg w-[100px] h-[100px] flex flex-col justify-center items-center">
                            <div>{user.posts}</div>
                            <div>Posts</div>
                        </div>
                        <div className="bg-gray-160/20 rounded-lg w-[100px] h-[100px] flex flex-col justify-center items-center">
                            <div>{user.pending}</div>
                            <div>Pending</div>
                        </div>
                    </div>
            )}
        </div>
    );
}