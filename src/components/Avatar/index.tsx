import React from "react";
import { Link } from "react-router-dom";
import { UserProperty, AvatarSize } from "@AppTypes/user";
import Icons, { IconName } from "@components/Icons";

interface IAvatarProps {
    user: UserProperty,
    size: AvatarSize,
    border?: boolean,
    link_to_profile?: string
}

export default class Avatar extends React.Component<IAvatarProps, {}>{
    render() {
        const { link_to_profile, user, size, border = false } = this.props;
        return (
            <Link to={(link_to_profile ? link_to_profile : "/profile")} className="flex-none">
                {user.avtHref ? (
                    <img
                        src={user.avtHref}
                        alt="user-avatar"
                        width={size}
                        height={size}
                        className={`rounded-full ${border && "border-4 border-white border-solid"}`}
                    ></img>
                ) : (
                    <div
                        className={`rounded-full bg-gray-200 flex items-center justify-center`}
                        style={{ height: size, width: size }}>
                        <Icons iconName={IconName.User1} />
                    </div>
                )}
            </Link>
        );
    }
};
