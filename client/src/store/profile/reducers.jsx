import { GET_PROFILE_STARTING, GET_PROFILE_SUCCESS, GET_PROFILE_ERROR } from './actions'

const INITIAL_STATE = {
    starting: false,
    data: {},
    error: null,
    message: null
}

export let profileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PROFILE_STARTING:
            return Object.assign({}, state, {
                starting: true,
                data: {},
                error: null,
                message: 'starting'
            });
        case GET_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                starting: false,
                data: action.payload,
                error: null,
                message: 'success'
            });
        case GET_PROFILE_ERROR:
            return Object.assign({}, state, {
                starting: false,
                data: {},
                error: action.payload,
                message: 'error'
            });
        default:
            return state
    }
}