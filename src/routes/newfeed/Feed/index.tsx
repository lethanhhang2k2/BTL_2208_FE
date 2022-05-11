import React from "react";
import { UserProperty } from "../../../types/user";
import FooterFeed from "./FooterFeed";
import HeaderNews from "./HeaderNews";
import ImageFeed from "./ImageFeed";
import Info from "./Info";
import TopComment from "./TopComment";

interface IFeedProps {
    topCommentTimeago: string,
    feedTimeago: string,
    comments: string,
    position?: string,
    price?: string,
    deposit?: string,
    content?: string,
    author?: UserProperty,
    authorTopComment: UserProperty,
    contentTopComment: string,
    images: string[]
}

export default class Feed extends React.Component<IFeedProps, {}> {
    render() {
        const { topCommentTimeago, feedTimeago, comments, position, price, deposit, content, author, authorTopComment, contentTopComment, images } = this.props
        return (
            <div className="w-[596px] bg-white rounded-md border-gray-150 border-solid border-2 mb-16">
                <HeaderNews user={author} />
                <Info
                    position={position}
                    price={price}
                    deposit={deposit}
                    content={content}
                />
                <ImageFeed images={images} />
                <FooterFeed timeago={feedTimeago} />
                <TopComment
                    comments={comments}
                    timeago={topCommentTimeago}
                    author={authorTopComment}
                    contentTopComment={contentTopComment}
                />
            </div>
        )
    }
}