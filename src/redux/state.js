
let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'hi, how are you', likesCount: 13 },
            { id: 2, message: 'its my first post', likesCount: 17 },
            { id: 3, message: 'NEW STATUS', likesCount: 6 },
            { id: 4, message: 'LIFE IS BEAUTIFUL', likesCount: 28 },
            ]
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
            ]
    },

    navBar: {
        friends: [
            { id: 1, name: 'Sawa' },
            { id: 2, name: 'Vasya' },
            { id: 3, name: 'Petya' },
        ]
    }
}

export let addPost = (postText) => {
    let newPost = {
        id:5,
        message: postText,
        likesCount: 4
    };

    state.profilePage.posts.push(newPost);
}

export default state;