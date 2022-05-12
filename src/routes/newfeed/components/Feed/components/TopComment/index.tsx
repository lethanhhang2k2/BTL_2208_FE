import Avatar from "@components/Avatar"
import UpdateTime, { Size } from "@components/UpdateTime"
import { AvatarSize, UserProperty } from "@AppTypes/user"

interface ITopCommentProps {
    comments: string,
    time_ago: string,
    author: UserProperty,
    contentTopComment: string
}

export default function TopComment({ comments, time_ago, author, contentTopComment }: ITopCommentProps) {
    return (
        <div className="mx-[20px] py-3">
            <div className="h-[28px] flex items-center">
                <Avatar user={author} size={AvatarSize.SSmall} />
                <p className="mx-2 text-[14px]">{contentTopComment}</p>
                <UpdateTime time_ago={time_ago} size={Size.Small} />
            </div>
            <button className="text-gray-160 outline-none text-[14px] mt-2">
                View all {comments} comments
            </button>
        </div>
    )
}