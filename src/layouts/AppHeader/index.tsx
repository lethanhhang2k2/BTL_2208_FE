import Logo from "@components/Logo";
import Search from "@components/Search";
import User from "@components/User";
import ActionAppHeader from "./components/ActionAppHeader";
import { UserProperty, AvatarSize, UserExample } from "../../types/user";
import Avatar from "@components/Avatar";

interface IAppHeader {
    user?: UserProperty
}

export default function AppHeader({ user = UserExample }: IAppHeader) {
    return (
        <div className="h-16 bg-white flex justify-center shadow-md sticky top-0 left-0 z-50">
            <div className="flex justify-between items-center w-1/2">
                <Logo />
                <Search />
                <div className="flex items-center">
                    <ActionAppHeader />
                    <Avatar user={user} size={AvatarSize.SSmall} border/>
                </div>
            </div>
        </div>
    )
}