import React from "react";
import Icons, { IconName } from "../Icons";
import { UserProperty, AvatarSize, UserExample } from "../../types/user";
import Avatar from "../Avatar";

interface IUserProps {
    user?: UserProperty,
    sizeAvt?: AvatarSize,
    border?: boolean,
    showName?: boolean,
    showRole?: boolean,
    twoLine?: boolean,
    directionLeft?: boolean
}

export default class User extends React.Component<IUserProps, {}> {
    render() {
        const {
            user = UserExample,
            sizeAvt = AvatarSize.Small,
            border = false,
            showName = false,
            showRole = false,
            twoLine = false,
            directionLeft = true
        } = this.props;

        return (
            <div className={`flex ${(showRole) ? "items-end" : "items-center"}`}>
                {!directionLeft && (
                    <div className="flex flex-col">
                        <p className="font-bold truncate">{user.username}</p>
                        <p className="text-gray-200 truncate">{user.role}</p>
                    </div>
                )}

                <Avatar user={user} size={sizeAvt} border={border} />

                {directionLeft && (
                    <div className={`flex overflow-hidden w-[210px] ${twoLine ? "flex-col" : ""}`}>
                        <p className="ml-2 font-semibold">{user.name}</p>
                        <div className="flex ml-2 text-gray-400 text-[14px] w-full">
                            {showName && <div className="flex mr-2">@{user.name}</div>}
                            {showRole && <div className="flex mr-2 text-green bg-bggreen px-2 rounded-lg font-semibold">{user.role}</div>}
                            <div className="flex items-center">
                                <Icons iconName={IconName.TrendingUp} stroke="#949494" size="20px" />
                                <p className="mx-1 truncate">{user.distance}</p>
                            </div>
                            <div className="flex ml-2 items-center">
                                <Icons iconName={IconName.Location1} stroke="#949494" size="20px" />
                                <p className="mx-1 truncate">{user.address}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}