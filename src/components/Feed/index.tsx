import React, { useEffect, useState } from "react";
import FooterFeed from "./components/FooterFeed";
import HeaderNews from "./components/HeaderNews";
import ImageFeed from "./components/ImageFeed";
import Info from "./components/Info";
import Comment from "./components/Comment";
import AddComment from "./components/AddComment";

import { MotelProperty } from "@AppTypes/motel";
import { getUser, parseUser } from "@api/user";
import { UserExample, UserProperty } from "@AppTypes/user";
import { CommentExample, CommentProperty } from "@AppTypes/comment";
interface IFeedProps {
    data: any,
    isShowFullComment?: boolean,
}

export default function Feed({ data, isShowFullComment = false } : IFeedProps) {
    const [user, setUser] = useState<UserProperty>(UserExample)
    const [comments, setComments] = useState([CommentExample])

        useEffect(() => {
            getUser(data.owner)
                .then(res => setUser(parseUser(res.data.user)))
                .catch(err => console.log(err))
        }, [])
    
    const handleAddComment = (comment: string) => {
        
        const newCmt: CommentProperty = {
            id: "",
            owner: user,
            content: comment,
            createdAt: new Date(),
        }
            
            setComments(comments.concat(newCmt))
        }

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
                    data={comments}
                    dataSize={comments.length}
                    //post_link={data.post_link}
                    isShowFullComment={isShowFullComment}
                />}
                <AddComment handleAddComment={handleAddComment} />
            </div>
        )
    }
