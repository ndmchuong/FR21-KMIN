import axios from "axios";

let urlAPI = 'https://fe21-db.herokuapp.com';
export const callAPI = (method, endpoint, body) => {
    return axios({
        method,
        url: `${urlAPI}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    })
}