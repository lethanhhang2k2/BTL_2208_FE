import { MessageProps, MessagesEx } from "@AppTypes/message";
import { AvatarSize, UserExample, UserProperty, UserRole } from "@AppTypes/user";
import Avatar from "@components/Avatar";
import ChatInput from "@components/ChatInput";
import Icons, { IconName } from "@components/Icons";
import AuthLayout from "@layouts/AuthLayout";
import { memo, useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import OtherBubble from "./OtherBubble";

const others = [
    {
        id: '002',
        username: '@john2',
        name: 'John2',
        avtHref: 'data:image/png;base64,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',
        theme: 'red',
        distance: 1.2,
        address: 'Thanh Xuan',
        role: UserRole.Renter,
        posts: 16,
        pending: 4
    },
    {
        id: '003',
        username: '@john3',
        name: 'John3',
        avtHref: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
        theme: 'red',
        distance: 1.2,
        address: 'Thanh Xuan',
        role: UserRole.Renter,
        posts: 16,
        pending: 4
    },
    {
        id: '004',
        username: '@john4',
        name: 'John',
        avtHref: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
        theme: 'red',
        distance: 1.2,
        address: 'Thanh Xuan',
        role: UserRole.Renter,
        posts: 16,
        pending: 4
    },
    {
        id: '005',
        username: '@john5',
        name: 'John5',
        avtHref: 'data:image/png;base64,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',
        theme: 'red',
        distance: 1.2,
        address: 'Thanh Xuan',
        role: UserRole.Renter,
        posts: 16,
        pending: 4
    },
    {
        id: '005',
        username: '@john5',
        name: 'John5',
        avtHref: 'data:image/png;base64,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',
        theme: 'red',
        distance: 1.2,
        address: 'Thanh Xuan',
        role: UserRole.Renter,
        posts: 16,
        pending: 4
    },
    {
        id: '005',
        username: '@john5',
        name: 'John5',
        avtHref: 'data:image/png;base64,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',
        theme: 'red',
        distance: 1.2,
        address: 'Thanh Xuan',
        role: UserRole.Renter,
        posts: 16,
        pending: 4
    },
    {
        id: '005',
        username: '@john5',
        name: 'John5',
        avtHref: 'data:image/png;base64,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',
        theme: 'red',
        distance: 1.2,
        address: 'Thanh Xuan',
        role: UserRole.Renter,
        posts: 16,
        pending: 4
    },
    {
        id: '005',
        username: '@john5',
        name: 'John5',
        avtHref: 'data:image/png;base64,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',
        theme: 'red',
        distance: 1.2,
        address: 'Thanh Xuan',
        role: UserRole.Renter,
        posts: 16,
        pending: 4
    },
]

function Inbox() {
    const user = UserExample
    const [other, setOther] = useState<UserProperty>()
    const [messages, setMessages] = useState<MessageProps[]>()

    const handleClickOther = (other: UserProperty) => {
        setOther(other)
        setMessages(MessagesEx.reverse())
    }

    const handleSendMessage = (msg: string) => {
        const newMsg:MessageProps = {
            id: "011",
            userId: user.id,
            content: msg,
            sent_at: String(new Date())
        }

        setMessages(messages?.reverse().concat(newMsg).reverse())
    }

    return (
        <AuthLayout>
            <div className="h-screen fixed top-0 w-screen">
                <div className="h-full pt-16">
                    <div className="w-full h-full flex items-center justify-center p-2">
                        <div className="w-3/5 h-full rounded-sm border-2 border-solid border-gray-150 bg-white flex">
                            <div className="border-r-2 border-gray-150 border-solid w-2/5 h-full">
                                <div className="border-b-2 border-gray-150 border-solid h-[10%] font-bold flex items-center justify-end px-2">
                                    <div className="flex w-3/5 justify-center cursor-pointer">
                                        <div>{user.name}</div>
                                        <div>
                                            <Icons iconName={IconName.ChevronDown} strokeWidth="0" />
                                        </div>
                                    </div>
                                    <div className="w-1/5 flex justify-end cursor-pointer">
                                        <Icons iconName={IconName.Edit3} strokeWidth="1.5" />
                                    </div>
                                </div>
                                <div className="overflow-y-auto max-h-[935px] h-[90%]">
                                    {others.map(other => {
                                        return (
                                            <div className="flex items-center p-2 cursor-pointer hover:bg-gray-150/20" onClick={() => handleClickOther(other)}>
                                                <img src={other.avtHref} width={AvatarSize.Large} height={AvatarSize.Large} className="rounded-full" />
                                                <div>
                                                    <div>{other.name}</div>
                                                    <div className="text-gray-160">Trạng thái</div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {other && (
                                <div className="w-3/5 h-full relative flex flex-col">
                                    <div className="px-4 bg-white z-10 border-b-2 border-gray-150 border-solid h-[10%] font-bold w-full flex items-center">
                                        <Avatar size={AvatarSize.Small} user={other} border={true} />
                                        <div>
                                            <div>{other.name}</div>
                                            <div className="text-gray-160 text-[12px]">Trạng thái</div>
                                        </div>
                                    </div>
                                    <div className="w-full h-[78%] max-h-[935px] bg-white overflow-y-auto flex flex-col-reverse pl-4 z-0">
                                        {messages?.map(message => {
                                            if (message.userId === other.id) {
                                                return (
                                                    <OtherBubble other={other} content={message.content} />
                                                )
                                            } else if (message.userId === user.id) {
                                                return (
                                                    <div className="flex justify-end py-1 px-4 relative">
                                                        <ChatBubble content={message.content} />
                                                    </div>
                                                )
                                            }
                                        })}

                                    </div>
                                    <div className="w-full px-4 h-[12%] flex items-center">
                                        <ChatInput handleSendMsg={handleSendMessage} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default memo(Inbox)