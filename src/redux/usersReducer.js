import { followUnfollowAPI, usersAPI } from "../api/api";

const SET_USERS = 'SET-USERS';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';


let initialState = {
    users: [],
    pageSize: 7,
    usersTotalCount: 0,
    currentPage: 1,
    isLoading: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_USERS_TOTAL_COUNT:
            return {...state, usersTotalCount: action.totalCount}

        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}

            case FOLLOW:
                return {
                    ...state, 
                    users: state.users.map(user => {
                        if(user.id ===  action.userId) {
                            return {...user, followed: true}
                        }
                    return user;
                    })
                }
            case UNFOLLOW:
                return {
                    ...state, 
                    users: state.users.map(user => {
                        if(user.id ===  action.userId) {
                            return {...user, followed: false}
                        }
                    return user;
                    })
                }

        default:
            return state;
    }

}

//ACTION CREATORS

export const setUsersActionCreator = (users) => {
    return{
        type: SET_USERS,
        users
    }
}

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setUsersTotalCountActionCreator = (totalCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalCount
    }
}

export const toggleIsLoadingActionCreator = (isLoading) => {
    return {
        type: TOGGLE_IS_LOADING,
        isLoading
    }
}

//THUNK CREATORS
export const getUsersThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(setCurrentPageActionCreator(currentPage))
        dispatch(toggleIsLoadingActionCreator(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsLoadingActionCreator(false))
            dispatch(setUsersActionCreator(data.items))
            dispatch(setUsersTotalCountActionCreator(data.totalCount))
        })
    }
}

export const followThunkCreator = (userId) => {

    return (dispatch) => {
        followUnfollowAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followActionCreator(userId))
            }
        })
    }
}

export const unfollowThunkCreator = (userId) => {

    return (dispatch) => {
        followUnfollowAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowActionCreator(userId))
            }
        })
    }
}

export default usersReducer;