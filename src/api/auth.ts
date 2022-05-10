import axios from "axios";

enum AccountStatus {
    NEW_ACCOUNT = "NEW_ACCOUNT",
    EXISTENT_ACCOUNT = "EXISTENT_ACCOUNT",
};

interface IAccountResponse {
    "is_correct": boolean,
    "enough_data": boolean,
    "account_status": AccountStatus | undefined,
    "message": string,
    "user_data": object
}

export async function getVerifyToken(token: string): Promise<IAccountResponse | undefined> {
    const response = await axios.post("http://localhost:3030/user/auth/google-login", { credential: token }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    });
    console.log(response);
    if (response.status === 200) {
        return response.data;
    }
    return undefined;
}