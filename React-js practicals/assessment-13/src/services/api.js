import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_AUTH_API_URL || 'https://reqres.in/api',
    headers: { 'Content-Type': 'application/json' },
});

export const loginUser = (email, password) => {
    return api.post('/login', { email, password });
};