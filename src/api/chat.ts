import { TOKEN } from './auth';
import { UserExample } from '@AppTypes/user';
import { UserProperty } from './../types/user';
import axios from 'axios';
import { MessageProps } from '@AppTypes/message';

const GET_CHAT = "http://tiro-app.herokuapp.com/chat/all";
const GET_CHAT_BOX = "http://tiro-app.herokuapp.com/chat/box/"
const GET_CHAT_MENU = "http://tiro-app.herokuapp.com/chat"

export const parseMessage = (messenger: any): MessageProps => {
    const msg: MessageProps = {
        id: messenger._id,
        userId: messenger.sender,
        content: messenger.message,
        sent_at: messenger.sentAt
    }

    return msg
}

export async function getAllConversation(user: object): Promise<{ ok: boolean, data: any }> {
    try {
        const response = await axios.post(GET_CHAT, {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
            user,
            token: TOKEN
        });
        if (response.status === 200) {
            return {
                ok: true,
                data: response.data
            }
        }
    } catch (error) {
        console.log(error);
    }
    return {
        ok: false,
        data: undefined
    }
}


export async function getChatMenu(user: object): Promise<{ ok: boolean, data: any }> {
    try {
        const response = await axios.post(GET_CHAT_MENU, {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
            user,
            token: TOKEN
        });
        if (response.status === 200) {
            return {
                ok: true,
                data: response.data
            }
        }
    } catch (error) {
        console.log(error);
    }
    return {
        ok: false,
        data: undefined
    }
}

export async function getChatBox(id: string): Promise<{ ok: boolean, data: any }> {
    try {
        const response = await axios.post(GET_CHAT_BOX + id, {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
            token: TOKEN
        });
        if (response.status === 200) {
            return {
                ok: true,
                data: response.data
            }
        }
    } catch (error) {
        console.log(error);
    }
    return {
        ok: false,
        data: undefined
    }
}