const SEND_MESSAGE = 'SEND-MESSAGE';

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
        ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {

            let newMessage = {id:5, messageText: action.newMessageText}

            return {
                ...state, 
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        }

        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageText) => {
    return{
        type: SEND_MESSAGE,
        newMessageText
    }
}


export default dialogsReducer;