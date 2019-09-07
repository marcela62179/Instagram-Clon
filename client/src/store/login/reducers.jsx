import { STARTING_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN } from './actions';

let INITIAL_STATE = {
	starting: false,
	success: false,
	error: null
};

export let loginReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case STARTING_LOGIN:
			return Object.assign({}, state, {
				starting: true,
				success: false,
				error: null
			});
		case SUCCESS_LOGIN:
			return Object.assign({}, state, {
				starting: false,
				success: action.payload,
				error: null
			});
		case ERROR_LOGIN:
			return Object.assign({}, state, {
				starting: false,
				success: false,
				error: action.payload
			});
		default:
			return state;
	}
};
