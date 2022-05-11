import React from "react";
import { UserProperty } from "@AppTypes/user";
import FooterFeed from "./components/FooterFeed";
import HeaderNews from "./components/HeaderNews";
import ImageFeed from "./components/ImageFeed";
import Info from "./components/Info";
import TopComment from "./components/TopComment";
import { DataTag } from "@AppTypes/tag";

interface IFeedProps {
    topCommentTimeago: string,
    feedTimeago: string,
    comments: string,
    data_tags?: DataTag[]
    content?: string,
    author?: UserProperty,
    authorTopComment: UserProperty,
    contentTopComment: string,
    images: string[]
}

export default class Feed extends React.Component<IFeedProps, {}> {
    render() {
        const { topCommentTimeago, feedTimeago, comments, data_tags, content, author, authorTopComment, contentTopComment, images } = this.props
        return (
            <div className="w-[596px] bg-white rounded-xl border-gray-150 border-solid border-2 mb-16">
                <HeaderNews user={author} />
                <Info
                    data_tags={data_tags}
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