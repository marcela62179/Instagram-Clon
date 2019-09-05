import {API_URL} from '../../helpers/Api_url';
import axios from 'axios';

export const STARTING_SIGNUP = 'STARTING_SIGNUP';
export const SUCCESS_SIGNUP = 'SUCCESS_SIGNUP';
export const ERROR_SIGNUP = 'ERROR_SIGNUP';

export const startingSignup = () => {
    return {
        type: STARTING_SIGNUP
    }
}

export const successSignup = () => {
    return {
        type: SUCCESS_SIGNUP
    }
}

export const errorSignup = (payload) => {
    return {
        type: ERROR_SIGNUP,
        payload
    }
}

export const signUpThunk = () => {
    return async (dispatch, getState) => {
        dispatch(startingSignup());
        try {

            let signUpForm = getState().form.signupForm
            const {username, email, password} = signUpForm.values
            
            let res = await axios.post(`${API_URL}/api/signup`, {
                username: username,
                email: email,
                password: password
            })
            console.log(res)
            dispatch(successSignup())
        } catch (error) {
            dispatch(errorSignup(error))
        }
    }
}
