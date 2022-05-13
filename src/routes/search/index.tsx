import React from "react";
import AuthLayout from "@layouts/AuthLayout"
import Feed from "@components/Feed"
import User from "@components/User"
import { UserExample, AvatarSize } from "@AppTypes/user";
import { DataTagsExample } from "@AppTypes/tag";
import QuickRedirect from "@components/QuickRedirect";
import { MotelProperty } from "@AppTypes/motel"
import { MotelStatus } from "@AppTypes/motel"
import { CommentExample } from "@AppTypes/comment"

const feeds:MotelProperty[] = [
    {
        id: "5156121",
        title: "Chung cư moi",
        owner: UserExample,
        address: "Xuan Thuy Cau Giay",
        fee: "2tr",
        description: "Rong rai, thoang mat",
        images: ["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],
        status: MotelStatus.Approved,
        data_tags: DataTagsExample,
        createAt: new Date(),
        comments: [CommentExample],
        post_link: "/post/5156121"
    },
    
    {
        id: "1651321351",
        title: "Chung cư day du",
        owner: UserExample,
        address: "Xuan Thuy Thanh Giay",
        fee: "2tr",
        description: "Rong rai, thoang mat",
        images: ["https://vnn-imgs-a1.vgcloud.vn/images.vov.vn/w800/uploaded/krb8sl5hrwuly8uzveukg/2019_08_29/Hinh_5_YRLH.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGcoBEQ2CKpkcXPIiahwFo0UOFpNxvAsfeQ&usqp=CAU",
        "https://img5.thuthuatphanmem.vn/uploads/2021/11/09/hinh-anh-dam-my-cuc-dep_084954718.jpg"],
        status: MotelStatus.Approved,
        data_tags: undefined,
        createAt: new Date(),
        comments: [CommentExample],
        post_link: "/post/5156121"
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
                                            data={feed}
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