import React from "react";
import { UserProperty } from "@AppTypes/user";
import FooterFeed from "./components/FooterFeed";
import HeaderNews from "./components/HeaderNews";
import ImageFeed from "./components/ImageFeed";
import Info from "./components/Info";
import TopComment from "./components/TopComment";
import { DataTag } from "@AppTypes/tag";

interface IFeedProps {
    author?: UserProperty,
    data_tags?: DataTag[]
    content?: string,
    images: string[]
    feedTimeAgo: string,
    topCommentTimeAgo: string,
    comments: string,
    authorTopComment: UserProperty,
    contentTopComment: string,
}

export default class Feed extends React.Component<IFeedProps, {}> {
    render() {
        const { topCommentTimeAgo, feedTimeAgo, comments, data_tags, content, author, authorTopComment, contentTopComment, images } = this.props
        return (
            <div className="w-full bg-white sm:rounded-xl border-solid sm:border-gray-150  sm:border-2 mb-16">
                <HeaderNews user={author} />
                <Info
                    data_tags={data_tags}
                    content={content}
                />
                <ImageFeed images={images} />
                <FooterFeed time_ago={feedTimeAgo} />
                <TopComment
                    comments={comments}
                    time_ago={topCommentTimeAgo}
                    author={authorTopComment}
                    contentTopComment={contentTopComment}
                />
            </div>
        )
    }
}