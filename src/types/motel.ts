import { UserProperty, UserExample } from "@AppTypes/user";
import { DataTag, DataTagsExample } from "@AppTypes/tag";
import { CommentProperty, CommentExample } from "./comment";

export enum MotelStatus { Approved, NotApproved, Decline }
export interface MotelProperty {
    id: string,
    title: string,
    owner: UserProperty,
    address: string,
    fee: string,
    description: string,
    images: string[]
    status: MotelStatus
    data_tags?: DataTag[]
    createAt: Date,
    comments: CommentProperty[],
    post_link: string
}

export const MotelExample: MotelProperty = {
    id: "15651321651",
    title: "Chung cư tại cầu giấy",
    owner: UserExample,
    address: "Xuan Thuy Cau Giay",
    fee: "2tr",
    description: "Rong rai, thoang mat",
    images: ["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],
    status: MotelStatus.Approved,
    data_tags: DataTagsExample,
    createAt: new Date(),
    comments: [CommentExample],
    post_link: "/post/15651321651"
}