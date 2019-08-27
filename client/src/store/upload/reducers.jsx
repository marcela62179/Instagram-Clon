import {STARTING_UPLOAD, SUCCESS_UPLOAD, ERROR_UPLOAD} from './actions';

let INITIAL_STATE = {
    starting: false,
    success: false,
    url: null,
    error: null
};

export let uploadReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STARTING_UPLOAD:
            return Object.assign({}, state, {
                starting: true,
                success: false,
                url: null,
                error: null
            });
        case SUCCESS_UPLOAD:
            return Object.assign({}, state, {
                starting: false,
                success: true,
                url: action.payload,
                error: null
            });
        case ERROR_UPLOAD:
            return Object.assign({}, state, {
                starting: false,
                success: false,
                url: null,
                error: action.payload
            });
        default:
            return state
    }
}