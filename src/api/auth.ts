import axios from "axios";

export async function getVerifyToken(token: string) {
    const response = axios.post("http://localhost:3030/user/auth/google-login", { credential: token }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    });
    console.log(response);
    
}