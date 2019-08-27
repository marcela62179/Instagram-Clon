import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';
import {loginReducer} from './login/reducers';
import {uploadReducer} from './upload/reducers';

const reducers = combineReducers({
    form: formReducer,
    login: loginReducer,
    upload: uploadReducer
})

export default reducers