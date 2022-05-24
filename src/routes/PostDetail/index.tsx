import { useParams } from "react-router-dom";
import AuthLayout from "@layouts/AuthLayout";
import Feed from "@components/Feed";
import { MotelProperty, MotelStatus } from "@AppTypes/motel";
import { UserExample } from "@AppTypes/user";
import { DataTagsExample } from "@AppTypes/tag";

const feedData: MotelProperty = {
    id: "15651321651",
    title: "Chung cư tại cầu giấy",
    owner: "",
    address: "Xuan Thuy Cau Giay",
    fee: "2tr",
    description: "Rong rai, thoang mat",
    images: ["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],
    status: MotelStatus.Approved,
    data_tags: DataTagsExample,
    createAt: new Date(),
    post_link: "/post/15651321651",
    comments: [
        {
            id: "15651321651",
            owner: UserExample,
            content: "Rong rai, thoang mat",
            createdAt: new Date()
        },
        {
            id: "15651321622",
            owner: UserExample,
            content: "Rong rai, mui hoi",
            createdAt: new Date()
        }

    ]
};

export default function PostDetail() {
    const { postID } = useParams();
    return (
        <AuthLayout>
            <div className="pt-16 flex justify-center">
                <div className="w-full max-w-[596px]">
                    <Feed data={feedData} />
                </div>
            </div>
        </AuthLayout>
    )
}