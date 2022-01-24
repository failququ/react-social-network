import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);

}
}

export default store;

window.store = store;