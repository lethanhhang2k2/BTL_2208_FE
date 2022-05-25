import { MessageProps, MessagesEx } from "@AppTypes/message";
import { AvatarSize, UserExample, UserExample2, UserProperty } from "@AppTypes/user";
import Avatar from "@components/Avatar";
import ChatInput from "@components/ChatInput";
import Icons, { IconName } from "@components/Icons";
import AuthLayout from "@layouts/AuthLayout";
import { memo, useState, useEffect, useContext, useRef } from "react";
import ChatBubble from "./ChatBubble";
import OtherBubble from "./OtherBubble";
import { getAllConversation, getChatBox, getChatMenu, parseMessage } from "@api/chat";
import { UserContext } from "@hooks/UserManager";
import io from "socket.io-client";
import { transform } from "typescript";
import socket from "src/socket/socket";

// const ENDPOINT = "http://tiro-app.herokuapp.com"

export let pushMessage = (sender: string, message: string) => {}

function Inbox() {
    const { user } = useContext(UserContext)
    const [ other, setOther ] = useState<any>()
    const [ room, setRoom ] = useState<string>("")
    const [ messages, setMessages ] = useState<MessageProps[]>([])
    const [others, setOthers] = useState<any[]>([])


    pushMessage = (sender: string, message: string) => {
        const newMsg: MessageProps = {
            id: "011",
            userId: sender === user.name ? user.id : other.id,
            content: message,
            sent_at: String(new Date())
        }
        
        setMessages(messages.reverse().concat(newMsg).reverse())
    }

    useEffect(() => {
        getAllConversation({ _id: user.id })
            .then(chat => {
                const others = chat.data.AllConversation
                console.log(others)
                setOthers(others)
            })
            .catch(err => console.log(err))
    }, [])

    const handleClickOther = (other: any) => {
        setOther(other)

        getChatBox(other.partner_id)
            .then(res => {
                const messages = res.data.conversation.messages
                
                const msgs = messages.map((message: any) => {
                    
                    return parseMessage(message)
                })

                console.log(msgs)
                

                setMessages(msgs.reverse())
                
                setRoom(res.data.conversation._id)
            })
    }

    const initConversation = (sender_id: string, conv_id: string, sender_name: string) => {
        const room_id = conv_id;
        const user_id = sender_id;
        const user_name = sender_name;
        socket.emit('setRoom', conv_id);
     };

    const handleSendMessage = (msg: string) => {

        socket.emit('msg', { message: msg, user: user.username, userId: user.id, room_id: room, })

        const newMsg: MessageProps = {
            id: "011",
            userId: user.id,
            content: msg,
            sent_at: String(new Date())
        }

        setMessages(messages?.reverse().concat(newMsg).reverse())
    }

    return (
        <AuthLayout>
            <div onLoad={() => initConversation(user.id, room, user.name)} className="h-screen fixed top-0 w-screen">
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
                                            <div key={other.partner_id} className="flex items-center p-2 cursor-pointer hover:bg-gray-150/20" onClick={() => handleClickOther(other)}>
                                                <img src={other.avatar} width={AvatarSize.Large} height={AvatarSize.Large} className="rounded-full" />
                                                <div>
                                                    <div>{other.username}</div>
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
                                            <div>{other.username}</div>
                                            <div className="text-gray-160 text-[12px]">Trạng thái</div>
                                        </div>
                                    </div>
                                    <div className="w-full h-[78%] max-h-[935px] bg-white overflow-y-auto flex flex-col-reverse pl-4 z-0">
                                        {messages?.map((message, index) => {
                                            if (message.userId === other.partner_id) {
                                                return (
                                                    <OtherBubble key={index} other={other} content={message.content} />
                                                )
                                            } else if (message.userId === user.id) {
                                                return (
                                                    <div key={index} className="flex justify-end py-1 px-4 relative">
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