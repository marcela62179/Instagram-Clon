import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';
import {loginReducer} from './login/reducers';
import {profileReducer} from './profile/reducers';
import {userReducer} from './user/reducers';

const reducers = combineReducers({
    form: formReducer,
    login: loginReducer,
    profile: profileReducer,
    user: userReducer
})

export default reducers