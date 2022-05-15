import React from "react";
import AuthLayout from "@layouts/AuthLayout"
import Feed from "@components/Feed"
import User from "@components/User"
import { UserExample, AvatarSize } from "@AppTypes/user";
import QuickRedirect from "@components/QuickRedirect";
import { MotelProperty, MotelExampleList } from "@AppTypes/motel"


const feeds: MotelProperty[] = MotelExampleList;

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