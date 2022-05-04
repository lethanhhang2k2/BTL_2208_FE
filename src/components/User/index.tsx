import * as SWMIconPack from "react-swm-icon-pack";
import Avatar from "../Avatar";

interface IUserProps {
    user: object,
    sizeAvt: string,
    border: boolean,
    showName: boolean,
    showRole: boolean,
    twoLine: boolean,
    directionLeft: boolean
}

export default function User({ user, sizeAvt, border, showName = false, showRole = false, twoLine = false, directionLeft = true }: IUserProps) {
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
                            <SWMIconPack.TrendingUp color="#949494" />
                            <p>{user.distance}</p>
                        </div>
                        <div className="flex ml-2">
                            <SWMIconPack.Location1 color="#949494"/>
                            <p>{user.address}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}