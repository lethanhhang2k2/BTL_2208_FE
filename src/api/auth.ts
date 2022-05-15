import axios from "axios";
import Cookies from 'js-cookie'

const POST_VERIFY_TOKEN = process.env["REACT_APP_HOST"] + "/user/auth/google-login";

enum AccountStatus {
    NEW_ACCOUNT = "NEW_ACCOUNT",
    EXISTENT_ACCOUNT = "EXISTENT_ACCOUNT",
};

interface IAccountResponse {
    "is_correct": boolean,
    "enough_data": boolean,
    "account_status": AccountStatus | undefined,
    "message": string,
    "user_data": object,
    "token": string,
}

// This function is only used for testing purposes.
function setToken(token: string) {
    Cookies.set('session-token', token);
}

export async function getVerifyToken(token: string): Promise<IAccountResponse | undefined> {
    try {
        const response = await axios.post(POST_VERIFY_TOKEN, { credential: token }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        });
        console.log(response);
        if (response.status === 200) {
            setToken(response.data.token);
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
    return undefined;
}