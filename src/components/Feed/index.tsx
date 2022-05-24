import React, { useEffect, useState } from "react";
import FooterFeed from "./components/FooterFeed";
import HeaderNews from "./components/HeaderNews";
import ImageFeed from "./components/ImageFeed";
import Info from "./components/Info";
import Comment from "./components/Comment";
import AddComment from "./components/AddComment";

import { MotelProperty } from "@AppTypes/motel";
import { getUser, parseUser } from "@api/user";
import { UserProperty } from "@AppTypes/user";
interface IFeedProps {
    data: any,
    isShowFullComment?: boolean,
}

export default function Feed({ data, isShowFullComment = false }: IFeedProps) {
    const [user, setUser] = useState<UserProperty>()

    useEffect(() => {
        getUser(data.owner)
            .then(user => {
                if (user.ok) {
                    setUser(parseUser(user.data.user));
                } else {
                    console.log("error");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="w-full bg-white sm:rounded-xl border-solid sm:border-gray-150  sm:border-2 mb-16">
            <HeaderNews user={user} />
            <Info
                data_tags={data.data_tags}
                content={data.description}
            />
            <ImageFeed images={data.images} />
            <FooterFeed createAt={data.createAt} />
            {data.comments && <Comment
                data={data.comments}
                dataSize={data.comments.length}
                post_link={"/post/" + data.id}
                isShowFullComment={isShowFullComment}
            />}
            <AddComment />
        </div>
    )
}