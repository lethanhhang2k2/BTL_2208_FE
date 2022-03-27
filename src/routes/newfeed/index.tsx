import { useState } from "react"
import AppHeader from "../../layouts/AppHeader"
import Feed from "./Feed"
import Suggest from "./Suggest"

const feeds = [
    {
        comments: "3.000",
        id: 1,
        author: {
            id: 111,
            username: "hang",
            avtHref: "https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg",
            distance: 3.9,
            address: "Thanh Xuan",
        },
        content: "Gần đh. Không chung chủ.",
        tags: {
            price: "2tr",
            deposit: "200k",
            position: "Mai Dich"
        },
        updatedAt: "10h ago",
        topComment: {
            updatedAt: "30m ago",
            content: "Gubjob",
            author: {
                id: 112,
                username: "hihi",
                avtHref: "https://hinhnen123.com/wp-content/uploads/2021/07/Bo-suu-tap-1001-hinh-anh-mang-dep-an-tuong-nhat-nam-2021.jpg"
            }
        }
    },
    {
        id: 2,
        comments: "4.000",
        author: {
            id: 200,
            username: "to",
            avtHref: null,
            distance: 1.9,
            address: "Hà Đông",
        },
        content: "Tiện bus. Free wifi.",
        tags: {
            price: "1.5tr",
            deposit: "100k",
            position: "Đường Láng"
        },
        updatedAt: "1d ago",
        topComment: {
            updatedAt: "2h ago",
            content: "Great!",
            author: {
                id: 211,
                username: "hoho",
                avtHref: "https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg"
            }
        }
    },
]

function NewFeed() { 
    return (
        <>
            <AppHeader />
            <div className="py-[80px] flex justify-center">
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
                                />
                            )
                        })}
                    </div>
                    <Suggest
                        user={{
                            id: 110,
                            username: "haha",
                            name: "Đào Ha",
                            avtHref: null,
                            distance: 4.0,
                            address: "Nam Từ Liêm"
                        }}
                        suggestedOwners={[
                            {
                                id: 111,
                                username: "hang",
                                name: "Đào Hằng",
                                avtHref: "https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg",
                                distance: 3.9,
                                address: "Thanh Xuan",
                            },
                            {
                                id: 112,
                                username: "hihi",
                                name: "Đào Hi",
                                avtHref: "https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",
                                distance: 2.0,
                                address: "Hai Bà Trưng"
                            }
                        ]}
                    />
                </div>
            </div>
        </>
    )
}

export default NewFeed