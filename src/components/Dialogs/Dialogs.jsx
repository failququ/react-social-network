import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    // DATA
    let dialogs = [
        { id: 1, name: 'Sawa' },
        { id: 2, name: 'Vasya' },
        { id: 3, name: 'Petya' },
        { id: 4, name: 'Alyosha' },
        { id: 5, name: 'Vitya' },
    ]

    let messages = [
        { id: 1, messageText: 'wassup' },
        { id: 2, messageText: 'wasgud' },
        { id: 3, messageText: 'whats crackin' },
        { id: 4, messageText: 'whats crackin' },
    ]

    // DATA MAPPING
    let dialogsItems = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesItems = messages
        .map(message => <Message messageText={message.messageText} />)


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
        </div>
    )
}

export default Dialogs;