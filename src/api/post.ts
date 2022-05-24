import { TOKEN } from './auth';
import { DataTag } from '@AppTypes/tag';
import { TagType } from '@AppTypes/tag';
import { DataTagsExample } from '@AppTypes/tag';
import { UserProperty } from './../types/user';
import { parseUser } from '@api/user';
import { getUser, getUserData } from '@api/user';
import { MotelProperty } from "@AppTypes/motel";
import axios from "axios";
import { AnyARecord } from 'dns';

const GET_ALL_POSTS = "http://tiro-app.herokuapp.com/post/get-all";
const GET_POST = "http://tiro-app.herokuapp.com/post/get/";
const GET_POST_SEARCH = "http://tiro-app.herokuapp.com/post/search";
const GET_MY_POST = "http://tiro-app.herokuapp.com/post/my-post";

const CREATE_POST = "http://tiro-app.herokuapp.com/post/new"

export function parsePost(post: any): any {
    const expenses: any = post.information.expenses

     console.log(expenses);

    // const rentalPrice = expenses.rental_price
    // const deposit = expenses.deposit

    // console.log(rentalPrice, deposit);
    

    // const positionTag: DataTag = {
    //     type: TagType.Position,
    //     value: post.address.district
    // }

    // const priceTag: DataTag = {
    //     type: TagType.Price,
    //     value: rentalPrice
    // }

    // const depositTag: DataTag = {
    //     type: TagType.Deposit,
    //     value: deposit
    // }

    const p: MotelProperty = {
        id: post._id,
        title: post.confirmation.title_of_post,
        owner: post.author,
        address: post.address.houser_number + "," + post.address.district,
        fee: "XX", //post.information.expenses.rental_price,
        description: post.confirmation.room_description,
        images: post.utilities.images,
        status: post.status,
        data_tags: DataTagsExample, //[ positionTag, priceTag, depositTag ],
        createAt: new Date(post.createdAt),
        comments: [],
        post_link: ""
    };

    return p 
}

export async function getAllPosts(): Promise<{ ok: boolean, data: any }> {
    try {
        const response = await axios.get(GET_ALL_POSTS);
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


export async function getPost(id: string): Promise<{ ok: boolean, data: any }> {
    try {
        const response = await axios.get(GET_POST + id);
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

export async function getPostSearch(params: object) {
    try {
        const response = await axios.get(GET_POST_SEARCH, params);
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

export async function getMyPost(): Promise<{ ok: boolean, data: any }> {
    try {
        const response = await axios.get(GET_MY_POST);
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

export async function createPost(params: any): Promise<{ ok: boolean, data: any }> {
    try {
        let form_data = new FormData();

        for ( let key in params ) {
            form_data.append(key, params[key]);
        }

        const response = await axios.post(CREATE_POST, {
            ...params,
            token: TOKEN
        }, {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            }
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




