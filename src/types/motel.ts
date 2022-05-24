import { UserProperty, UserExample } from "@AppTypes/user";
import { DataTag, DataTagsExample } from "@AppTypes/tag";
import { CommentProperty, CommentExample } from "./comment";

export enum MotelStatus { Approved, NotApproved, Decline }
export interface MotelProperty {
    //need to create
    title: string,
    owner: string,
    address: string,
    fee: string,
    description: string,
    images: string[]
    status: MotelStatus

    // no need
    id: string,
    data_tags?: DataTag[]
    createAt: Date,
    comments: CommentProperty[],
    post_link: string
}

export const MotelExample: MotelProperty = {
    id: "15651321651",
    title: "Chung cư tại cầu giấy",
    owner: "627b8d0b2c355d29097d668a",
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

export const MotelExampleList: MotelProperty[] = [
    {
        id: "5156121",
        title: "Chung cư moi",
        owner: "",
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
        owner: "",
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
    }
]
