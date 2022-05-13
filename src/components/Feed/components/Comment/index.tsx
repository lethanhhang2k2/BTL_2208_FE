import Avatar from "@components/Avatar"
import UpdateTime, { Size } from "@components/UpdateTime"
import { AvatarSize } from "@AppTypes/user"
import { CommentProperty } from "@AppTypes/comment"

interface ITopCommentProps {
    data: CommentProperty[],
    dataSize: number,
    post_link?: string,
    isShowFullComment: boolean,
}

function CommentItem({ comment }: { comment: CommentProperty }) {
    return (
        <div className="h-[28px] flex items-center my-2" >
            <Avatar user={comment.owner} size={AvatarSize.SSmall} />
            <p className="mx-2 text-[14px]">{comment.content}</p>
            <UpdateTime createAt={comment.createdAt} size={Size.Small} />
        </div >
    )
}

export default function Comment({ data, dataSize, post_link, isShowFullComment }: ITopCommentProps) {
    return (
        <div className="mx-[20px] py-3">
            {isShowFullComment
                ? <div>
                    {data.map(comment => <CommentItem key={comment.id} comment={comment} />)}
                    <a className="text-gray-160 outline-none text-[14px] my-2 block cursor-pointer" href={post_link}>
                        View all {dataSize} comments
                    </a>
                </div>
                : data.slice(0, 3).map((comment, index) => <CommentItem key={index} comment={comment} />)
            }
        </div>
    )
}