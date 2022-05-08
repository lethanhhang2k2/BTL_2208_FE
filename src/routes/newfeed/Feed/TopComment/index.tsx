import { Link } from "react-router-dom"
import Avatar from "../../../../components/Avatar"
import UpdateTime from "../../../../components/UpdateTime"
import { AvatarSize, UserProperty } from "../../../../type/user"

interface ITopCommentProps {
    comments: string,
    timeago: string,
    author: UserProperty,
    contentTopComment: string
}

export default function TopComment({ comments, timeago, author, contentTopComment }: ITopCommentProps) {
    return (
        <div className="mx-[40px] py-4">
            <div className="h-[28px] flex items-center">
                <Avatar user={author} size={AvatarSize.SSmall} />
                <p className="mx-2">{contentTopComment}</p>
                <UpdateTime timeago={timeago} />
            </div>
            <button className="text-gray-160 outline-none">
                View all {comments} comments
            </button>
        </div>
    )
}