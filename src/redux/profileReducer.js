const ADD_POST = 'ADD-POST';
const POST_TEXT_UPDATE = 'POST-TEXT-UPDATE';

let initialState = {
    posts: [
        { id: 1, message: 'hi, how are you', likesCount: 13 },
        { id: 2, message: 'its my first post', likesCount: 17 },
        { id: 3, message: 'NEW STATUS', likesCount: 6 },
        { id: 4, message: 'LIFE IS BEAUTIFUL', likesCount: 28 },
        ],
        
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id:5,
                message: state.newPostText,
                likesCount: 4
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case POST_TEXT_UPDATE:
            let stateCopy = {...state};
            stateCopy.newPostText= action.newText;
            return stateCopy;
        default:
            return state;
    }

}

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

export default profileReducer;