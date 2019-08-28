import Axios from 'axios';
import { history } from './history';
import { API_URL } from './Api_url';

const TOKEN_KEY = 'token';

export function setToken(valor) {
    localStorage.setItem(TOKEN_KEY, valor);
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
}

export function initAxiosInterceptors() {
    Axios.interceptors.request.use(function (config) {
        const token = getToken();

        if (config.url.includes(API_URL)) {
            if (token) {
                config.headers.Authorization = `bearer ${token}`;
            }
        }

        return config;
    });

    Axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (401 === error.response.status) {
                deleteToken();
                //window.location = '/login';
                history.push('/login')
            } else {
                return Promise.reject(error);
            }
        }
    );
}
