import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';

//Reducers
import {imagesReducer} from '../components/reducers/imagesReducer';

const middleware = applyMiddleware(promise(), createLogger());
//const middleware = applyMiddleware(promise());

const reducers = combineReducers({
    images: imagesReducer
});

const store = createStore(reducers, middleware);

export default store;