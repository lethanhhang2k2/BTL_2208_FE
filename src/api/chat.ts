import { UserExample } from '@AppTypes/user';
import { UserProperty } from './../types/user';
import axios from 'axios';

const GET_CHAT = "http://tiro-app.herokuapp.com/chat/all";

export async function getChat(user: object): Promise<{ ok: boolean, data: any }> {
    try {
        const response = await axios.post(GET_CHAT, {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
            user
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