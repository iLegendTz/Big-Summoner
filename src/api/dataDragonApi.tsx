import axios from "axios";

export const baseURL = 'YOUR DATA DRAGON API URL';

const dataDragon = axios.create({
    baseURL,
});


export default dataDragon;