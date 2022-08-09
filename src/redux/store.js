import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import footballReducer from './footy/football';

const rootReducer = combineReducers({ footballReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
