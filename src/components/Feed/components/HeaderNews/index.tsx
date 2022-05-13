import User from "@components/User";
import ActionHeaderNews from "./ActionHeaderNews";
import { AvatarSize, UserProperty } from "@AppTypes/user";

interface IHeaderNews {
    user?: UserProperty
}

export default function HeaderNews({ user }: IHeaderNews) {
    return (
        <div className="py-3 flex justify-center px-[20px]">
            <div className="flex w-full justify-between">
                <div className="max-w-[250px]">
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