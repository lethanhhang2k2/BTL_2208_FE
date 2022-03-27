import Logo from "../../components/Logo";
import Search from "../../components/Search";
import ActionAppHeader from "./ActionAppHeader";

export default function AppHeader() {
    return (
        <div className="h-[80px] bg-white flex justify-center">
            <div className="w-[932px] flex justify-between items-center">
                <Logo />
                <Search />
                <ActionAppHeader />
            </div>
        </div>
    )
}