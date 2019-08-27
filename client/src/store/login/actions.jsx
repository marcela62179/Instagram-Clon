import axios from 'axios';
import { history } from '../../helpers/history';
import { API_URL } from '../../helpers/Api_url';
import { setToken, deleteToken } from '../../helpers/auth-helpers';

export const STARTING_LOGIN = 'STARTING_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';

export const startingLogin = () => {
    return {
        type: STARTING_LOGIN
    };
};

export const successLogin = (payload) => {
    return {
        type: SUCCESS_LOGIN,
        payload
    };
};

export const errorLogin = (payload) => {
    return {
        type: ERROR_LOGIN,
        payload
    };
};

export const loginThunk = () => {
    return async (dispatch, getState) => {
        dispatch(startingLogin());
        const loginForm = getState().form.loginForm
        const values = loginForm.values

        let res = await axios.post(`${API_URL}/api/login`, {
            username: values.username,
            password: values.password
        })

        if(res.data.err){
            dispatch(errorLogin(res.data.err))
        }else{
            setToken(res.data.token)
            dispatch(successLogin(true));
            history.push('/dashboard')
        }
        
    }
}

export const logOut = () => {
    return async (dispatch) => {
        deleteToken()
        dispatch(successLogin(false))
        history.push('/login')
    }
}