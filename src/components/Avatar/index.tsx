import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserProperty, AvatarSize } from "@AppTypes/user";
import Icons, { IconName } from "@components/Icons";
import { UserContext } from "@hooks/UserManager";

interface IAvatarProps {
    user: UserProperty,
    size: AvatarSize,
    border?: boolean,
    link_to_profile?: string
}

export default function Avatar({ user, size, border, link_to_profile }: IAvatarProps) {
    const { user: u} = useContext(UserContext)

        return (
            <Link to={user.id !== u.id ? "/profile/" + user.id : "/profile"} className="flex-none">
                {user.avtHref ? (
                    <img
                        src={user.avtHref}
                        alt="user-avatar"
                        width={size}
                        height={size}
                        className={`rounded-full object-cover ${border && "border-4 border-white border-solid"}`}
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
