import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import footballReducer from './footy/football';
import fetchMatchApi from './footballApi';

const rootReducer = combineReducers({ footballReducer });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
store.dispatch(fetchMatchApi());

export default store;
