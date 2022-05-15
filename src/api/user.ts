import axios from "axios";
import { UserProperty } from "@AppTypes/user";
import FormData from 'form-data'

const GET_USER_DATA = "http://localhost:3030/user/get";
const UPDATE_USER_DATA = "http://localhost:3030/user/update";

export function parseUser(user: any): UserProperty {
    console.log(user);

    return {
        id: user["_id"],
        username: user["username"],
        name: user["given_name"],
        avtHref: user["picture"]["name"],
        theme: user["theme"],
        distance: user["distance"],
        address: "",
        role: user["role"],
        email: user["email"],
        phone: user["phone"],
    } as UserProperty;
}

export async function getUserData(): Promise<{ ok: boolean, data: any }> {
    try {
        const response = await axios.get(GET_USER_DATA, {
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

export function updateUserData(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
        if (data) {
            axios.post(UPDATE_USER_DATA, data, {
                withCredentials: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                }
            })
                .then(response => {
                    if (response.status === 200) resolve(undefined)
                    else reject("Error updating user data");
                })
                .catch(error => {
                    reject(error);
                });
        } else reject("No data to update");
    });
}

export function uploadImage(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            console.log(formData);

            axios.post(UPDATE_USER_DATA, formData, {
                withCredentials: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    if (response.status === 200) resolve(undefined)
                    else reject("Error uploading image");
                })
                .catch(error => {
                    reject(error)
                });
        } else resolve(undefined);
    });
}

