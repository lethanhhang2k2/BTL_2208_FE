import React, { useContext } from "react";
import { UserProperty } from "@AppTypes/user"
import Icons, { IconName } from "@components/Icons"
import IconButton from "@components/IconButton"
import LabelCount from "@components/LabelGroup/countLabel"
import IconLabel from "@components/LabelGroup/iconLabel"
import { useGoogleAuth } from "@hooks/GoogleAuthProvider";
import { UserContext } from "@hooks/UserManager";

interface IProps {
    user: UserProperty
}

export default function UserInfo({ user }: IProps) {
    const { isSignedIn, signIn, signOut } = useGoogleAuth();
    const { user: u } = useContext(UserContext)

        return (
            <div className="ml-10">
                <div>
                    <div className="flex items-center">
                        <p className="text-4xl text-gray-500 font-semibold">{user.name}</p>
                        <IconButton>
                            <Icons iconName={IconName.Setting} stroke="#6b7280" strokeWidth="1.5px" size="35px" />
                        </IconButton>
                        <IconButton href="/nametag">
                            <Icons iconName={IconName.QRCode} stroke="#6b7280" strokeWidth="1.5px" size="35px" />
                        </IconButton>
                        {user.id === u.id && (
                            <IconButton onClick={() => signOut()}>
                                <Icons iconName={IconName.Logout} stroke="#6b7280" strokeWidth="1.5px" size="35px" />
                            </IconButton>
                        )}
                    </div>
                    <p className="text-gray-500 font-semibold">{user.username}</p>
                </div>
                <div>
                    <div className="mt-3 flex flex-wrap">
                        <LabelCount label="posts" value={20} />
                        <LabelCount label="pending posts" value={20} />
                        <LabelCount label="followers" value={20} />
                        <LabelCount label="followings" value={20} />
                    </div>
                    <div className=" mt-2 flex">
                        <IconLabel icon={IconName.TrendingUp} value={4.5} />
                        <IconLabel icon={IconName.Location1} value={user.address} />
                    </div>
                </div>
                <p className="mt-3 text-gray-500">Cho thu?? tr??? gi?? t??? 2tr</p>
            </div>
        );
    }