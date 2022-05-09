import User from "../../../../components/User";
import ActionHeaderNews from "./ActionHeaderNews";
import { AvatarSize, UserProperty } from "../../../../types/user";

interface IHeaderNews {
    user?: UserProperty
}

export default function HeaderNews({ user }: IHeaderNews) {
    return (
        <div className="py-4 flex justify-center">
            <div className="flex w-[560px] justify-between">
                <div className="w-[400px]">
                    <User
                        user={user}
                        sizeAvt={AvatarSize.SSmall}
                    />
                </div>
                <ActionHeaderNews />
            </div>
        </div>
    )
}