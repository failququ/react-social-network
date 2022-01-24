import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from "./navbarReducer";

let reducers = combineReducers({

    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    navBar: navbarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;