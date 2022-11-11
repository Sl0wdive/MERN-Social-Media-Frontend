import axios from "axios";

const instance = axios.create({
    baseURL: 'https://mern-social-media-2022.herokuapp.com/'
});

export default instance;