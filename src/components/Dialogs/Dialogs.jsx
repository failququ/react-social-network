import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    // DATA

    // DATA MAPPING
    let dialogsItems = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesItems = props.state.messages
        .map(message => <Message messageText={message.messageText} />)

    let newMessage = React.useRef(null);

    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
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
                    <textarea ref={newMessage}></textarea>
                    <button onClick={sendMessage} className={classes.btn}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;