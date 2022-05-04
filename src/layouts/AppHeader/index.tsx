import Logo from "../../components/Logo";
import Search from "../../components/Search";
import User from "../../components/User";
import ActionAppHeader from "./ActionAppHeader";

interface IAppHeader {
    displayAvt: boolean,
    user: object,
    sizeAvt: string,
    showName: boolean,
    twoLine: boolean,
    directionLeft: boolean,
    contentWidth: string
}

export default function AppHeader({ displayAvt = false, user, sizeAvt, showName = false, twoLine = false, contentWidth = "[932px]" } : IAppHeader) {
    return (
        <div className="h-[80px] bg-white flex justify-center border-b-2 border-gray-150">
            <div className={`w-${contentWidth} flex justify-between items-center`}>
                <Logo />
                <Search />
                <ActionAppHeader />
                {displayAvt && user && (
                    <User
                        user={user}
                        sizeAvt={sizeAvt}
                        showName={showName}
                        twoLine={twoLine}
                        directionLeft={false}
                    />
                )}
            </div>
        </div>
    )
}