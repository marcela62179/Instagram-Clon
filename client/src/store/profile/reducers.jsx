import {
	GET_PROFILE_STARTING,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_ERROR
} from './actions';

const INITIAL_STATE = {
	loading: true,
	starting: false,
	data: {},
	images: [],
	error: null,
	message: null
};

export let profileReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_PROFILE_STARTING:
			return Object.assign({}, state, {
				loading: true,
				starting: true,
				data: {},
				images: [],
				error: null,
				message: 'starting'
			});
		case GET_PROFILE_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				starting: false,
				data: action.payload.user,
				images: action.payload.images,
				error: null,
				message: 'success'
			});
		case GET_PROFILE_ERROR:
			return Object.assign({}, state, {
				loading: false,
				starting: false,
				data: {},
				images: [],
				error: action.payload,
				message: 'error'
			});
		default:
			return state;
	}
};
