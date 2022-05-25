import axios from "axios";

const SEARCH_HOST = "http://tiro-app.herokuapp.com/search-by-text";

async function getSearch(address: string[], price: number[], username: string) {
    console.log(address[0], price[0], username);
    
    try {
        const response = await axios.post(SEARCH_HOST, {
            address: address[0],
            price_category: price[0],
            text: username
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

export {
    getSearch
}