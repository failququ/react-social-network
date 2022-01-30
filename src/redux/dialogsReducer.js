const SEND_MESSAGE = 'SEND-MESSAGE';
const MESSAGE_TEXT_UPDATE = 'MESSAGE-TEXT-UPDATE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {

            let newMessage = {id:5, messageText: state.newMessageText}

            return {
                ...state, 
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };

        }
        case MESSAGE_TEXT_UPDATE:
            return {...state, newMessageText: action.newText};

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return{
        type: SEND_MESSAGE
    }
}

export const messageTextUpdateActionCreator = (text) => {
    return {
        type: MESSAGE_TEXT_UPDATE,
        newText: text
    }
}

export default dialogsReducer;