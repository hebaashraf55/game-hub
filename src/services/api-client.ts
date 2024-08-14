import axios from "axios";


export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key: '062ce92e2f184e5c97eaabf45daf137f'
    }
});