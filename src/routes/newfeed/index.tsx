
import React from "react"
import AuthLayout from "@layouts/AuthLayout"
import { UserExample } from "../../types/user"
import Feed from "./components/Feed"
import Suggest from "./components/Suggest"
import { DataTag, DataTagsExample } from "@AppTypes/tag"
const feeds = [
    {
        comments: "3.000",
        id: 1,
        author: UserExample,
        content: "Gần đh. Không chung chủ.",
        images: ["https://photo-cms-anninhthudo.zadn.vn/w600/Uploaded/2022/bpcpcwvo/2021_09_14/1-9303.jpg"],
        tags: DataTagsExample,
        updatedAt: "10h ago",
        topComment: {
            updatedAt: "30m ago",
            content: "Gubjob",
            author: UserExample
        }
    },
    {
        id: 2,
        comments: "4.000",
        author: UserExample,
        content: "Tiện bus. Free wifi.",
        images: [
            "https://vnn-imgs-a1.vgcloud.vn/images.vov.vn/w800/uploaded/krb8sl5hrwuly8uzveukg/2019_08_29/Hinh_5_YRLH.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGcoBEQ2CKpkcXPIiahwFo0UOFpNxvAsfeQ&usqp=CAU",
            "https://img5.thuthuatphanmem.vn/uploads/2021/11/09/hinh-anh-dam-my-cuc-dep_084954718.jpg"
        ],
        tags: DataTagsExample,
        updatedAt: "1d ago",
        topComment: {
            updatedAt: "2h ago",
            content: "Great!",
            author: UserExample
        }
    },
]
export default class NewFeed extends React.Component {
    render() {
        return (
            <AuthLayout>
                <div className="pt-16 flex justify-center">
                    <div className="w-1/2 flex flex-row relative">
                        <div className="mr-[32px]">
                            {feeds.map(feed => {
                                return (
                                    <Feed
                                        key={feed.id}
                                        topCommentTimeago={feed.topComment.updatedAt}
                                        feedTimeago={feed.updatedAt}
                                        comments={feed.comments}
                                        data_tags={feed.tags}
                                        content={feed.content}
                                        author={feed.author}
                                        authorTopComment={feed.topComment.author}
                                        contentTopComment={feed.topComment.content}
                                        images={feed.images}
                                    />
                                )
                            })}
                        </div>

                        <Suggest
                            user={UserExample}
                            suggestedOwners={[UserExample, UserExample]}
                        />
                    </div>
                </div>
            </AuthLayout>
        );
    }
}