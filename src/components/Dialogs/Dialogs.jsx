import React from 'react';
import { messageTextUpdateActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    // DATA

    // DATA MAPPING
    let dialogsItems = props.messagesPage.dialogs
        .map((dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} />);

    let messagesItems = props.messagesPage.messages
        .map((message, index) => <Message key={index} messageText={message.messageText} />)

    let newMessage = React.useRef(null);

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageInputUpdate = (e) => {
        let text = e.target.value;
        props.dispatch(messageTextUpdateActionCreator(text));
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
                <div className={classes.postingBlock}>
                    <textarea ref={newMessage} value={props.messagesPage.newMessageText} onChange={onMessageInputUpdate} />
                    <button onClick={sendMessage} className={classes.btn}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;