import * as SWMIconPack from "react-swm-icon-pack";
import Avatar from "../Avatar";

interface IUserProps {
    user: object,
    sizeAvt: string,
    showName: boolean,
    twoLine: boolean
}

export default function User({ user, sizeAvt, showName = false, twoLine = false }: IUserProps) {
    return (
        <div className={`flex items-center`}>
            <Avatar user={user} size={sizeAvt} />
            <div className={`flex  ${twoLine && "flex-col"}`}>
                <p className="ml-2">{user.username}</p>
                <div className="flex ml-2 text-gray-200 text-[14px]">
                    {showName && <div className="flex mr-2">@{user.name}</div>}
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
        </div>
    )
}