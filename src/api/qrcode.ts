import axios from "axios";

export async function getQRCode() {
    try {
        const options = {
            method: 'GET',
            url: 'https://qrcode-monkey.p.rapidapi.com/qr/custom',
            params: {
              data: 'https://www.qrcode-monkey.com',
              config: '{"bodyColor": "#0277BD", "body":"mosaic"}',
              download: 'true',
              file: 'png',
              size: '600'
            },
            headers: {
              'X-RapidAPI-Host': 'qrcode-monkey.p.rapidapi.com',
              'X-RapidAPI-Key': 'f6475b0623mshb08149ae628c8a1p1de51bjsnb8bf8a56444e'
            }
          };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    } catch (error) {
        console.log(error);
    }
    return {
        ok: false,
        data: undefined
    }
}