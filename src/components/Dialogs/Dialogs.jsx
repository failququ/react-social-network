import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {


    // DATA MAPPING
    let dialogsItems = props.dialogs
        .map((dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} />);

    let messagesItems = props.messages
        .map((message, index) => <Message key={index} messageText={message.messageText} />)



    let sendNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <h4>DIALOGS</h4>
                {dialogsItems}
            </div>
            <div className={classes.messages}>
                <h4>MESSAGES</h4>
                {messagesItems}
            </div>
            <ReduxSendMessageForm onSubmit={sendNewMessage} />
        </div>
    )
}

const SendMessageForm = (props) => {
    return (
        <form className={classes.postingBlock} onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newMessageText"} placeholder="Enter your message" />
            <button className={classes.btn}>Send message</button>
        </form>
    )
}

const ReduxSendMessageForm = reduxForm({ form: "dialogSendMessageForm" })(SendMessageForm)

export default Dialogs;