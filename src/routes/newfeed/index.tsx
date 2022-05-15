
import React from "react"
import AuthLayout from "@layouts/AuthLayout"
import { UserExample } from "../../types/user"
import Feed from "../../components/Feed"
import Suggest from "./components/Suggest"
import { MotelProperty, MotelExampleList } from "@AppTypes/motel"

const feeds: MotelProperty[] = MotelExampleList;
export default class NewFeed extends React.Component {
    render() {
        return (
            <AuthLayout>
                <div className="pt-16 flex justify-center">
                    <div className="max-w-[935px] w-full flex flex-row justify-center relative">
                        <div className="mr-0 lg:mr-[32px] max-w-[596px] w-full">
                            {feeds.map(feed => {
                                return (<Feed key={feed.id} data={feed} isShowFullComment />)
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