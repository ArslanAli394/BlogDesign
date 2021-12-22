import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
// const thunkMiddleware = require('redux-thunk').default;

const reducer = combineReducers({
        blogList:rootReducer
})

const store = createStore(reducer,applyMiddleware(thunk))

export default store;