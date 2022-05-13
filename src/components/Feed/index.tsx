import React from "react";
import FooterFeed from "./components/FooterFeed";
import HeaderNews from "./components/HeaderNews";
import ImageFeed from "./components/ImageFeed";
import Info from "./components/Info";
import Comment from "./components/Comment";
import AddComment from "./components/AddComment";

import { MotelProperty } from "@AppTypes/motel";
interface IFeedProps {
    data: MotelProperty,
    isShowFullComment?: boolean,
}

export default class Feed extends React.Component<IFeedProps, {}> {
    render() {
        const { data, isShowFullComment = false } = this.props
        return (
            <div className="w-full bg-white sm:rounded-xl border-solid sm:border-gray-150  sm:border-2 mb-16">
                <HeaderNews user={data.owner} />
                <Info
                    data_tags={data.data_tags}
                    content={data.description}
                />
                <ImageFeed images={data.images} />
                <FooterFeed createAt={data.createAt} />
                <Comment
                    data={data.comments}
                    dataSize={data.comments.length}
                    post_link={data.post_link}
                    isShowFullComment={isShowFullComment}
                />
                <AddComment />
            </div>
        )
    }
}