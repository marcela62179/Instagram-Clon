import {
	GET_IMAGE_STARTING,
	GET_IMAGE_SUCCESS,
	GET_IMAGE_ERROR
} from "store/singleImage/actions";

let INITIAL_DATA = {
	starting: false,
	data: {},
	error: null
};

export const imageReducer = (state = INITIAL_DATA, action) => {
	switch (action.type) {
		case GET_IMAGE_STARTING:
			return Object.assign({}, state, {
				starting: true,
				data: {},
				error: null
			});
		case GET_IMAGE_SUCCESS:
			return Object.assign({}, state, {
				starting: false,
				data: action.payload,
				error: null
			});
		case GET_IMAGE_ERROR:
			return Object.assign({}, state, {
				starting: false,
				data: {},
				error: action.payload
			});
		default:
			return state;
	}
};
