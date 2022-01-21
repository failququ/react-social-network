const ADD_POST = 'ADD-POST';
const POST_TEXT_UPDATE = 'POST-TEXT-UPDATE';
const SEND_MESSAGE = 'SEND-MESSAGE';
const MESSAGE_TEXT_UPDATE = 'MESSAGE-TEXT-UPDATE';

let store = {

    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'hi, how are you', likesCount: 13 },
                { id: 2, message: 'its my first post', likesCount: 17 },
                { id: 3, message: 'NEW STATUS', likesCount: 6 },
                { id: 4, message: 'LIFE IS BEAUTIFUL', likesCount: 28 },
                ],
                
            newPostText: ''
        },
    
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Sawa' },
                { id: 2, name: 'Vasya' },
                { id: 3, name: 'Petya' },
                { id: 4, name: 'Alyosha' },
                { id: 5, name: 'Vitya' },
                ],
        
            messages: [
                { id: 1, messageText: 'wassup' },
                { id: 2, messageText: 'wasgud' },
                { id: 3, messageText: 'whats crackin' },
                { id: 4, messageText: 'whats crackin' },
                ],
    
                newMessageText: ''
        },
    
        navBar: {
            friends: [
                { id: 1, name: 'Sawa' },
                { id: 2, name: 'Vasya' },
                { id: 3, name: 'Petya' },
            ]
        }
    },
    _callSubscriber(){
        console.log('state changed');
    },


    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },


    dispatch(action) {

        if(action.type === ADD_POST) {
            let newPost = {
                id:5,
                message: this._state.profilePage.newPostText,
                likesCount: 4
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } 
        
        else if (action.type === POST_TEXT_UPDATE) {
            this._state.profilePage.newPostText= action.newText;
            this._callSubscriber(this._state);
        } 
        
        else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id:5,
                messageText: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } 
        
        else if (action.type === MESSAGE_TEXT_UPDATE) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return{
        type: 'ADD-POST'
    }
}

export const postTextUpdateActionCreator = (text) => {
    return {
        type: 'POST-TEXT-UPDATE',
        newText: text
    }
}

export const sendMessageActionCreator = () => {
    return{
        type: 'SEND-MESSAGE'
    }
}

export const messageTextUpdateActionCreator = (text) => {
    return {
        type: 'MESSAGE-TEXT-UPDATE',
        newText: text
    }
}

export default store;

window.store = store;