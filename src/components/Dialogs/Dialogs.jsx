import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    // DATA

    // DATA MAPPING
    let dialogsItems = props.dialogs
        .map((dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} />);

    let messagesItems = props.messages
        .map((message, index) => <Message key={index} messageText={message.messageText} />)

    // let newMessage = React.useRef(null);

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageInputUpdate = (e) => {
        let text = e.target.value;
        props.onMessageInputUpdate(text);
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
                    <textarea value={props.newMessageText} onChange={onMessageInputUpdate} />
                    <button onClick={onSendMessage} className={classes.btn}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;