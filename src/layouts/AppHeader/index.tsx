import Logo from "@components/Logo";
import Search from "@components/Search";
import ActionAppHeader from "./components/ActionAppHeader";
import { AvatarSize } from "../../types/user";
import Avatar from "@components/Avatar";
import { useContext } from "react";
import { UserContext } from "@hooks/UserManager";

export default function AppHeader() {
    const { user } = useContext(UserContext);
    return (
        <div className="h-16 bg-white flex justify-center shadow-md sticky top-0 left-0 z-50">
            <div className="flex justify-between items-center w-full max-w-[935px] px-3">
                <Logo />
                <Search />
                <div className="flex items-center">
                    <ActionAppHeader />
                    <Avatar user={user} size={AvatarSize.SSmall} border />
                </div>
            </div>
        </div>
    )
}