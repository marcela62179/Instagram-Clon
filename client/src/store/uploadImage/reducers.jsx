import {
	UPLOAD_IMAGE_STARTING,
	UPLOAD_IMAGE_SUCCESS,
	UPLOAD_IMAGE_ERROR
} from "store/uploadImage/actions";

const INITIAL_STATE = {
	starting: false,
	success: false,
	error: null
};

export const uploadImageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPLOAD_IMAGE_STARTING:
			return Object.assign({}, state, {
				starting: true,
				success: false,
				error: null
			});
		case UPLOAD_IMAGE_SUCCESS:
			return Object.assign({}, state, {
				starting: false,
				success: true,
				error: null
			});
		case UPLOAD_IMAGE_ERROR:
			return Object.assign({}, state, {
				starting: false,
				success: false,
				error: action.payload
			});
		default:
			return state;
	}
};
