import Axios from "axios";
import {API_URL} from '../../helpers/Api_url';

export const GET_USER_STARTING = 'GET_USER_STARTING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUserStarting = () => {
    return {
        type: GET_USER_STARTING
    }
};

export const getUserSuccess = (payload) => {
    return {
        type: GET_USER_SUCCESS,
        payload
    }
};

export const getUserError = (payload) => {
    return {
        type: GET_USER_ERROR,
        payload
    }
};

export const getUserThunk = (id) => {
    return async (dispatch, getState) => {
        dispatch(getUserStarting())
        try {
            let res = await Axios.get(`${API_URL}/api/user/${id}`)
            if(res.statusText === 'OK' && res.status === 200){
                dispatch(getUserSuccess(res.data))
            }
        } catch (error) {
            dispatch(getUserError(error.response.data))
        }
    }
};