import axios from 'axios';
import { API_URL } from '../../helpers/Api_url';

export const GET_IMAGE_STARTING = 'GET_IMAGE_STARTING';
export const GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS';
export const GET_IMAGE_ERROR = 'GET_IMAGE_ERROR';

export const getImageStarting = () => {
	return {
		type: GET_IMAGE_STARTING
	};
};

export const getImageSuccess = payload => {
	return {
		type: GET_IMAGE_SUCCESS,
		payload
	};
};

export const getImageError = payload => {
	return {
		type: GET_IMAGE_ERROR,
		payload
	};
};

export const getImageThunk = imageId => {
	return async (dispatch, getState) => {
		dispatch(getImageStarting());
		try {
			let res = await axios.get(`${API_URL}/api/image/${imageId}`);
			if (res.statusText === 'OK' && res.status === 200) {
				dispatch(getImageSuccess(res.data));
			}
		} catch (error) {
			dispatch(getImageError(error.response.data));
		}
	};
};
