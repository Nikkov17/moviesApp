import { createStore, combineReducers, applyMiddleware } from 'redux';
import moviesListReducer from '../reducers/movieslist';
import promisesMiddleware from '../middlewares/promises';

const reducer = combineReducers({
  moviesList: moviesListReducer
});

let createStoreWithMiddleware = applyMiddleware(promisesMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer, {
  moviesList: {}
});

export default store;
