import React from "react";
import { Link } from "react-router-dom";
import { UserProperty, AvatarSize } from "../../type/user";
import Icons from "../Icons";

interface IAvatarProps {
    user: UserProperty,
    size: AvatarSize,
    border?: boolean
}

export default class Avatar extends React.Component<IAvatarProps, {}>{
    render() {
        const { user, size, border = false } = this.props;
        return (
            <Link to="/">
                {user.avtHref ? (
                    <img
                        src={user.avtHref}
                        width={size}
                        height={size}
                        className={`rounded-full ${border && "border-4 border-white border-solid"}`}
                    ></img>
                ) : (
                    <div className={`rounded-full bg-gray-200 flex items-center justify-center`} style={{ height: size, width: size }}>
                        <Icons iconName="user1" />
                    </div>
                )}
            </Link>
        );
    }
};
