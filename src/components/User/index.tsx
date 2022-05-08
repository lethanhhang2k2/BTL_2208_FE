import React from "react";
import Icons, { IconName } from "../Icons";
import { UserProperty, AvatarSize, UserExample } from "../../type/user";
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
            <div className={`flex ${showRole ? "items-end" : "items-center"}`}>
                {!directionLeft && (
                    <div className="flex flex-col">
                        <p>{user.username}</p>
                        <p className="text-gray-200">{user.role}</p>
                    </div>
                )}
                <Avatar user={user} size={sizeAvt} border={border} />
                {directionLeft && (
                    <div className={`flex  ${twoLine && "flex-col"}`}>
                        <p className="ml-2">{user.username}</p>
                        <div className="flex ml-2 text-gray-200 text-[14px]">
                            {showName && <div className="flex mr-2">@{user.name}</div>}
                            {showRole && <div className="flex mr-2 text-green bg-bggreen px-2 rounded-lg">{user.role}</div>}
                            <div className="flex">
                                <Icons iconName={IconName.TrendingUp} color="#949494" />
                                <p>{user.distance}</p>
                            </div>
                            <div className="flex ml-2">
                                <Icons iconName={IconName.Location1} color="#949494" />
                                <p>{user.address}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}