import User from "@components/User";
import ActionHeaderNews from "./ActionHeaderNews";
import { AvatarSize, UserProperty } from "@AppTypes/user";
import { MotelProperty } from "@AppTypes/motel";

interface IHeaderNews {
    user?: UserProperty,
    post?: MotelProperty,
    bookmark?: boolean
}

export default function HeaderNews({ user, post, bookmark }: IHeaderNews) {
    return (
        <div className="py-3 flex justify-center px-[20px]">
            <div className="flex w-full justify-between">
                <div className="max-w-[250px]">
                    <User
                        user={user}
                        sizeAvt={AvatarSize.SSmall}
                    />
                </div>
                <ActionHeaderNews post={post} bookmark={bookmark} />
            </div>
        </div>
    )
}