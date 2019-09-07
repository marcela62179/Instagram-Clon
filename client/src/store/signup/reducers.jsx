import { STARTING_SIGNUP, SUCCESS_SIGNUP, ERROR_SIGNUP } from './actions';

const INITIAL_STATE = {
	starting: false,
	success: false,
	error: {
		message: null,
		field: null
	}
};

export const signupReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case STARTING_SIGNUP:
			return Object.assign({}, state, {
				starting: true,
				success: false,
				error: null
			});
		case SUCCESS_SIGNUP:
			return Object.assign({}, state, {
				starting: false,
				success: true,
				error: null
			});
		case ERROR_SIGNUP:
			return Object.assign({}, state, {
				starting: false,
				success: false,
				error: action.payload
			});
		default:
			return state;
	}
};
