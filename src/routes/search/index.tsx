import React from "react";
import AuthLayout from "@layouts/AuthLayout"
import Feed from "@components/Feed"
import User from "@components/User"
import { UserExample, AvatarSize } from "@AppTypes/user";
import { DataTagsExample } from "@AppTypes/tag";
import QuickRedirect from "@components/QuickRedirect";

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

export default class SearchPage extends React.Component {
    render() {
        return (
            <AuthLayout>
                <div className="pt-16 flex flex-col items-center">
                    <div className="text-5xl font-bold text-gray-600 mb-14">Kết quả tìm kiếm của "Tim tro" </div>

                    <div className="max-w-[950px] w-full flex flex-col lg:flex-row justify-center items-center lg:items-start relative">
                        <div className="mr-0 max-w-[596px] lg:mr-[32px] w-full">
                            <div className="font-semibold text-gray-600 text-xl mb-8">
                                Bài viết liên quan
                            </div>
                            <div>
                                {feeds.map(feed => {
                                    return (
                                        <Feed
                                            key={feed.id}
                                            topCommentTimeAgo={feed.topComment.updatedAt}
                                            feedTimeAgo={feed.updatedAt}
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
                        </div>

                        <div className="w-full max-w-[350px]">
                            <div className="font-semibold text-gray-600 text-xl mb-8">
                                Tài khoản liên quan
                            </div>

                            <a href="#" className="mb-[20px] bg-white rounded-lg border-2 border-gray-200 p-2 py-4 cursor-pointer block">
                                <User user={UserExample} sizeAvt={AvatarSize.Medium} showName={true} twoLine={true} />
                            </a>
                            <a href="#" className="mb-[20px] bg-white rounded-lg border-2 border-gray-200 p-2 py-4 cursor-pointer block">
                                <User user={UserExample} sizeAvt={AvatarSize.Medium} showName={true} twoLine={true} />
                            </a>
                        </div>
                    </div>
                    <QuickRedirect /> 
                </div>
            </AuthLayout>
        )
    }
} 