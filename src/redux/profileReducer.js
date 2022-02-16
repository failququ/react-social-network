import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    posts: [
        { id: 1, message: 'hi, how are you', likesCount: 13 },
        { id: 2, message: 'its my first post', likesCount: 17 },
        { id: 3, message: 'NEW STATUS', likesCount: 6 },
        { id: 4, message: 'LIFE IS BEAUTIFUL', likesCount: 28 },
        ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id:5,
                message: action.newPostText,
                likesCount: 4
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''};
        }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }

}

//ACTION CREATORS

export const addPostActionCreator = (newPostText) => {
    return{
        type: ADD_POST,
        newPostText
    }
}

export const setUserProfileActionCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setUserStatusActionCreator = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

//THUNK CREATORS

export const getUserProfileThunkCreator = (userId) => {

    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfileActionCreator(data));
            })
    }
}

export const getUserStatusThunkCreator = (userId) => {

    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setUserStatusActionCreator(data));
            })
    }
}

export const updateUserStatusThunkCreator = (status) => {

    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setUserStatusActionCreator(status));
                }
            })
    }
}

export default profileReducer;