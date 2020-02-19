import {combineReducers, createStore} from "redux";

let redusers = combineReducers();//нужно передать объект с редюсерами(стейт)

let store = createStore(reducers);

export default store;