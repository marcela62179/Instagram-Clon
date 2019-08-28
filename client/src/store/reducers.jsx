import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';
import {loginReducer} from './login/reducers';
import {uploadReducer} from './upload/reducers';
import {profileReducer} from './profile/reducers';

const reducers = combineReducers({
    form: formReducer,
    login: loginReducer,
    upload: uploadReducer,
    profile: profileReducer
})

export default reducers