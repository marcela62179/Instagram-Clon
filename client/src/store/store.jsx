import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
const middlewares = [thunk]

export let store = compose(
    applyMiddleware(...middlewares)
)(createStore)(reducers)
