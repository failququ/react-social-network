import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const POST_TEXT_UPDATE = 'POST-TEXT-UPDATE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'hi, how are you', likesCount: 13 },
        { id: 2, message: 'its my first post', likesCount: 17 },
        { id: 3, message: 'NEW STATUS', likesCount: 6 },
        { id: 4, message: 'LIFE IS BEAUTIFUL', likesCount: 28 },
        ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id:5,
                message: state.newPostText,
                likesCount: 4
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''};
        }
        case POST_TEXT_UPDATE:
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }

}

//ACTION CREATORS

export const addPostActionCreator = () => {
    return{
        type: ADD_POST
    }
}

export const postTextUpdateActionCreator = (text) => {
    return {
        type: POST_TEXT_UPDATE,
        newText: text
    }
}

export const setUserProfileActionCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
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

export default profileReducer;