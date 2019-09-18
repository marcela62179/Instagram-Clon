import axios from "axios";
import { history } from "helpers/history";
import { API_URL } from "helpers/Api_url";

export const UPLOAD_IMAGE_STARTING = "UPLOAD_IMAGE_STARTING";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_ERROR = "UPLOAD_IMAGE_ERROR";

export const uploadImageStarting = () => {
	return {
		type: UPLOAD_IMAGE_STARTING
	};
};

export const uploadImageSuccess = () => {
	return {
		type: UPLOAD_IMAGE_SUCCESS
	};
};

export const uploadImageError = payload => {
	return {
		type: UPLOAD_IMAGE_ERROR,
		payload
	};
};

export const uploadImageThunk = url => {
	return async dispatch => {
		try {
			dispatch(uploadImageStarting());
			let res = await axios.post(`${API_URL}/api/image`, { url });
			if (res.statusText === "OK" && res.status === 200) {
				dispatch(uploadImageSuccess());
				history.push(`/p/${res.data._id}`);
			}
		} catch (error) {
			dispatch(uploadImageError(error));
		}
	};
};
