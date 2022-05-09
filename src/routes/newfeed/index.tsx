
import React from "react"
import AppHeader from "../../layouts/AppHeader"
import AuthLayout from "../../layouts/AuthLayout"
import { UserExample } from "../../types/user"
import Feed from "./Feed"
import Suggest from "./Suggest"

const feeds = [
    {
        comments: "3.000",
        id: 1,
        author: UserExample,
        content: "Gần đh. Không chung chủ.",
        images: ["https://photo-cms-anninhthudo.zadn.vn/w600/Uploaded/2022/bpcpcwvo/2021_09_14/1-9303.jpg"],
        tags: {
            price: "2tr",
            deposit: "200k",
            position: "Mai Dich"
        },
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
        tags: {
            price: "1.5tr",
            deposit: "100k",
            position: "Đường Láng"
        },
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
                    <div className="w-[932px] flex flex-row relative">
                        <div className="mr-[32px]">
                            {feeds.map(feed => {
                                return (
                                    <Feed
                                        key={feed.id}
                                        topCommentTimeago={feed.topComment.updatedAt}
                                        feedTimeago={feed.updatedAt}
                                        comments={feed.comments}
                                        position={feed.tags.position}
                                        price={feed.tags.price}
                                        deposit={feed.tags.deposit}
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