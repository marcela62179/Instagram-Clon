import axios from "axios";
import { API_URL } from "../../helpers/Api_url";

export const GET_PROFILE_STARTING = "GET_PROFILE_STARTING";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

export let getProfileStarting = () => {
	return {
		type: GET_PROFILE_STARTING
	};
};

export let getProfileSuccess = payload => {
	return {
		type: GET_PROFILE_SUCCESS,
		payload: payload
	};
};

export let getProfileError = payload => {
	return {
		type: GET_PROFILE_ERROR,
		payload: payload
	};
};

export const getProfileThunk = username => {
	return async dispatch => {
		dispatch(getProfileStarting());
		try {
			let res = await axios.get(`${API_URL}/api/user/${username}`);
			if (res.statusText === "OK" && res.status === 200) {
				dispatch(getProfileSuccess(res.data));
			}
		} catch (error) {
			dispatch(getProfileError(error.response.data));
		}
	};
};
