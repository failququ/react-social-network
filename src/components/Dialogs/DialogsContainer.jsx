import React from 'react';
import { connect } from 'react-redux';
import { messageTextUpdateActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageInputUpdate: (text) => {
            dispatch(messageTextUpdateActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;