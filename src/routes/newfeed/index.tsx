
import React from "react"
import AuthLayout from "@layouts/AuthLayout"
import { UserExample } from "../../types/user"
import Feed from "../../components/Feed"
import Suggest from "./components/Suggest"
import { DataTagsExample } from "@AppTypes/tag"
import { MotelProperty } from "@AppTypes/motel"
import { MotelStatus } from "@AppTypes/motel"
import { CommentExample } from "@AppTypes/comment"

const feeds: MotelProperty[] = [
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
export default class NewFeed extends React.Component {
    render() {
        return (
            <AuthLayout>
                <div className="pt-16 flex justify-center">
                    <div className="max-w-[935px] w-full flex flex-row justify-center relative">
                        <div className="mr-0 lg:mr-[32px] max-w-[596px] w-full">
                            {feeds.map(feed => {
                                return (<Feed key={feed.id} data={feed} isShowFullComment/>)
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