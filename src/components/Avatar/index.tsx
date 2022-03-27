import { Link } from "react-router-dom";
import * as SWMIconPack from "react-swm-icon-pack";

interface IAvatarProps {
    user: object,
    size: string,
}

export default function Avatar({ user, size } : IAvatarProps) {
    return (
        <Link to="/">
            {user.avtHref ? (
                <img
                    src={user.avtHref}
                    width={size}
                    height={size}
                    className="rounded-full"
                ></img>
            ) : (
                    <div className={`rounded-full bg-gray-200 flex items-center justify-center`} style={{ height: size, width: size}}>
                     <SWMIconPack.User1 />   
                </div>
            )}
        </Link>
    )
}