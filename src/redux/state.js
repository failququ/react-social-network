let rerenderEntireApp = () => {
    console.log('state changed');
}

let state = {

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
}

export const addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 4
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireApp(state);
}

export const postTextUpdate = (newText) => {
    state.profilePage.newPostText= newText;
    rerenderEntireApp(state);
}


export const sendMessage = () => {
    let newMessage = {
        id:5,
        messageText: state.messagesPage.newMessageText
    };
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireApp(state);
}

export const messageTextUpdate = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireApp(state);
}

export const subscribe = (observer) => {
    rerenderEntireApp = observer;
}

export default state;