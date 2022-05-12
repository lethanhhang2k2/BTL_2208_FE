import axios from "axios";
import { UserProperty } from "@AppTypes/user";

const GET_USER_DATA = "http://localhost:3030/user/get";
const UPDATE_USER_DATA = "http://localhost:3030/user/update";

export function parseUser(user: any): UserProperty {
    return {
        id: "123",
        username: user["username"],
        name: user["given_name"],
        avtHref: user["picture"]["name"],
        theme: user["theme"],
        distance: user["distance"],
        address: "",
        role: user["role"]
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
            if (data.username && data.password) {
                if (data.username !== "" && data.password !== "") {
                    console.log("Alo");
                    
                    axios.post(UPDATE_USER_DATA, data, {
                        withCredentials: true,
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                        }
                    }).then(response => {
                        if (response.status === 200) resolve(undefined)
                        else reject(undefined)
                    })
                    .catch(error => {
                        console.log(error);
                        reject(undefined)
                    });
                }
                reject(undefined);
            }
            reject(undefined);
        }
    });
}
