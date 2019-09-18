import {
	GET_USER_STARTING,
	GET_USER_SUCCESS,
	GET_USER_ERROR
} from "store/user/actions";

let INITIAL_STATE = {
	loading: true,
	starting: false,
	data: {},
	isLoged: false,
	error: null
};

export let userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_USER_STARTING:
			return Object.assign({}, state, {
				loading: true,
				starting: true,
				data: {},
				isLoged: false,
				error: null
			});
		case GET_USER_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				starting: false,
				data: action.payload.user,
				isLoged: true,
				error: null
			});
		case GET_USER_ERROR:
			return Object.assign({}, state, {
				loading: false,
				starting: true,
				data: {},
				isLoged: false,
				error: action.payload
			});
		default:
			return state;
	}
};
