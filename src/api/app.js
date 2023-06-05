import axios from 'axios';

const Start = {};

export const API = axios.create({
    baseURL: `/`,
    withCredentials:true,
    headers: {
        'Content-Type':'application/json'
    }
});