import { combineReducers, createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


const store = createStore(rootReducer, applyMiddleware(thunk)); 


export default store;