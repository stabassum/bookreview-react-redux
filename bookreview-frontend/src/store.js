import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import bookFormData from './reducers/bookFormData'
import errors from './reducers/errors'
import booksReducer from './reducers/booksReducer'

import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    loginForm,
    bookFormData,
    signupForm,
    errors,
    booksReducer
});

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store