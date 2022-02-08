import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state, 
                ...action.data,
                isAuth: true
            };

        }

        default:
            return state;
    }
}

//ACTION CREATORS
export const setUserDataActionCreator = (id, login, email ) => {
    return{
        type: SET_USER_DATA,
        data: {id, login, email }
    }
}

// THUNK CREATORS

export const setUserDataThunkCreator = () => {

    return (dispatch) => {
        authAPI.getUserData().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setUserDataActionCreator(id, login, email))
            }
        })
    }
}


export default authReducer;