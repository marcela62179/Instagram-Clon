import Axios from 'axios';
import { API_URL } from './Api_url';
import jwt from 'jsonwebtoken';

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

export function getTokenDecode() {
	if (getToken()) {
		let decode = jwt.decode(getToken());
		if (decode) {
			return decode;
		} else {
			deleteToken();
			return null;
		}
	} else {
		return null;
	}
}

export function initAxiosInterceptors() {
	Axios.interceptors.request.use(function(config) {
		const token = getToken();

		if (config.url.includes(API_URL)) {
			if (token) {
				config.headers.Authorization = `bearer ${token}`;
			}
		}

		return config;
	});

	Axios.interceptors.response.use(
		function(response) {
			return response;
		},
		function(error) {
			if (401 === error.response.status) {
				deleteToken();
				window.location = '/login';
			} else {
				return Promise.reject(error);
			}
		}
	);
}
