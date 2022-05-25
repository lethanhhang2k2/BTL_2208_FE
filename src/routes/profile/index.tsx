import React from "react";
import AuthLayout from "@layouts/AuthLayout";
import Avatar from "@components/Avatar";
import { UserExample, AvatarSize, UserProperty } from "@AppTypes/user";
import QuickRedirect from "@components/QuickRedirect";
import UserInfo from "./components/userInfo";
import Tab from "./components/tab";
import PostCard from "@components/PostCard";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "@hooks/UserManager";
import { parseUser, getUser } from "@api/user";

const tabList = [
    { title: "Gắn thẻ", isActive: false },
    { title: "Đã lưu", isActive: false },
    { title: "Bán thành công", isActive: false },
]

const postList = [
    {
        img_href: "https://sites.google.com/site/thietkenhatro/_/rsrc/1524458903786/home/mot-so-luu-y-khi-xay-nha-tro-cho-thue.jpg",
        status: "Đã duyệt",
        title: "Chung cư mini tại Cầu Giấy",
        description: "Gan dh quoc gia",
        location: "Mai Dich",
        fee: "2tr"
    },
    {
        img_href: "https://sites.google.com/site/thietkenhatro/_/rsrc/1524458903786/home/mot-so-luu-y-khi-xay-nha-tro-cho-thue.jpg",
        status: "Đã duyệt",
        title: "Chung cư mini tại Cầu Giấy",
        description: "Gan dh quoc gia",
        location: "Mai Dich",
        fee: "2tr"
    },
    {
        img_href: "https://sites.google.com/site/thietkenhatro/_/rsrc/1524458903786/home/mot-so-luu-y-khi-xay-nha-tro-cho-thue.jpg",
        status: "Đã duyệt",
        title: "Chung cư mini tại Cầu Giấy",
        description: "Gan dh quoc gia",
        location: "Mai Dich",
        fee: "2tr"
    },
    {
        img_href: "https://sites.google.com/site/thietkenhatro/_/rsrc/1524458903786/home/mot-so-luu-y-khi-xay-nha-tro-cho-thue.jpg",
        status: "Đã duyệt",
        title: "Chung cư mini tại Cầu Giấy",
        description: "Gan dh quoc gia",
        location: "Mai Dich",
        fee: "2tr"
    }
]

interface IState {
    tabList_: { title: string, isActive: boolean }[],
    user: UserProperty;
}



export default function Profile() {
    const [tabList_, setTabList_] = React.useState<IState["tabList_"]>(tabList);
    const [user_, setUser] = React.useState<IState["user"]>(UserExample);
    const { userID } = useParams();
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log(userID);
        
        if (userID) {
            getUser(userID as string)
                .then(user => {
                    if (user.ok) {
                        setUser(parseUser(user.data.user));
                    } else {
                        console.log("error");
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            setUser(user);
        }
    }, [userID]);

    const handleTabClick = (selectedIndex: number) => {
        let tabListModifier = tabList_;
        tabListModifier.forEach((item, index) => {
            item.isActive = (selectedIndex === index);
        });
        setTabList_([...tabListModifier]);
        console.log(tabList_);
    }

    return (
        <AuthLayout>
            <div className="pt-16 flex flex-col items-center min-h-screen justify-between">
                <div className="max-w-[1000px] w-full flex flex-col items-center">
                    <div className="flex mt-5 mb-5 flex-col md:flex-row">
                        <div className="mx-auto mb-5 md:mb-0 md:mx-0">
                            <Avatar user={user_} size={AvatarSize.X2Large} />
                        </div>
                        <UserInfo user={user_} />
                    </div>
                    <div className="md:flex hidden">
                        {tabList_.map((tab, index) => (
                            <Tab
                                key={index}
                                title={tab.title}
                                isActive={tab.isActive}
                                itemIndex={index}
                                onClick={handleTabClick} />
                        ))}
                    </div>

                    <div className="flex m-4 flex-wrap justify-center lg:justify-start">
                        {postList.map((post, index) => (
                            <PostCard key={index} data={post} />
                        ))}
                    </div>
                </div>
                <QuickRedirect />
            </div>
        </AuthLayout>
    );
}