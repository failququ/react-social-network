import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({

    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    navBar: navbarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;