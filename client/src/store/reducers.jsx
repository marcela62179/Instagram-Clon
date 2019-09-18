import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { loginReducer } from "store/login/reducers";
import { profileReducer } from "store/profile/reducers";
import { userReducer } from "store/user/reducers";
import { signupReducer } from "store/signup/reducers";
import { imageReducer } from "store/singleImage/reducers";
import { uploadImageReducer } from "store/uploadImage/reducers";

const reducers = combineReducers({
	form: formReducer,
	login: loginReducer,
	profile: profileReducer,
	user: userReducer,
	signup: signupReducer,
	image: imageReducer,
	uploadImage: uploadImageReducer
});

export default reducers;
