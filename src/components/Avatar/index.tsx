import { Link } from "react-router-dom";
import * as SWMIconPack from "react-swm-icon-pack";

interface IAvatarProps {
    user: object,
    size: string,
    border: boolean
}

export default function Avatar({ user, size, border = false } : IAvatarProps) {
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
                    <div className={`rounded-full bg-gray-200 flex items-center justify-center`} style={{ height: size, width: size}}>
                     <SWMIconPack.User1 />   
                </div>
            )}
        </Link>
    )
}