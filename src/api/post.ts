import { TOKEN } from './auth';
import { DataTag, TagType, DataTagsExample } from '@AppTypes/tag';
import { MotelProperty } from "@AppTypes/motel";
import axios from "axios";

const GET_ALL_POSTS = "http://tiro-app.herokuapp.com/post/get-all";
const GET_POST = "http://tiro-app.herokuapp.com/post/get/";
const GET_POST_SEARCH = "http://tiro-app.herokuapp.com/post/search";
const GET_MY_POST = "http://tiro-app.herokuapp.com/post/my-post";

const CREATE_POST = "http://tiro-app.herokuapp.com/post/new"

const SAVE_POST = "http://tiro-app.herokuapp.com/post/save/"
const UNSAVE_POST = "http://tiro-app.herokuapp.com/post/unsave/"

export function parsePost(post: any): any {
    const expenses: any = post.information.expenses;
    const rentalPrice = expenses.rental_price
    // const deposit = expenses.deposit

    // console.log(rentalPrice, deposit);


    const positionTag: DataTag = {
        type: TagType.Position,
        value: post.address.address
    }

    const priceTag: DataTag = {
        type: TagType.Price,
        value: rentalPrice
    }

    // const depositTag: DataTag = {
    //     type: TagType.Deposit,
    //     value: deposit
    // }

    const p: MotelProperty = {
        id: post._id,
        title: post.confirmation.title_of_post,
        owner: post.author,
        address: post.address.houser_number + "," + post.address.district,
        fee: rentalPrice,
        description: post.confirmation.room_description,
        images: post.utilities.images,
        status: post.status,
        // data_tags: DataTagsExample, //[ positionTag, priceTag, depositTag ],
        data_tags: [positionTag, priceTag],
        createAt: new Date(post.createdAt),
        comments: [],
        post_link: ""
    };
    console.log(p);

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
        console.log(params);

        const response = await axios.post(CREATE_POST, {
            params,
            token: TOKEN
        }, {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            }
        });
        for (var pair of params.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        console.log(response);

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


export async function savePost(postId: string, ): Promise<{ ok: boolean, data: any }> {
    try {

        const response = await axios.post(SAVE_POST + postId, {
            token: TOKEN
        }, {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
            params: {
                id: postId
            }
        });

        console.log(response);

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

export async function unsavePost(postId: string, ): Promise<{ ok: boolean, data: any }> {
    try {

        const response = await axios.post(UNSAVE_POST + postId, {
            token: TOKEN
        }, {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
            params: {
                id: postId
            }
        });

        console.log(response);

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