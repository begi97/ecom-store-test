import { combineReducers } from 'redux';
import productReducer from "./productReducer";
import {createStore} from "redux";

// const comboReducers = combineReducers(productReducer);

// Globalized STORE
let store = createStore(productReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;