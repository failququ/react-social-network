import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>
                <img src="https://w7.pngwing.com/pngs/628/819/png-transparent-scalable-graphics-avatar-icon-tie-waiter-recruiter-cartoon-vector-tie-thumbnail.png" alt="" />
                {props.name}
            </NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Sawa' },
        { id: 2, name: 'Vasya' },
        { id: 3, name: 'Petya' },
        { id: 4, name: 'Alyosha' },
        { id: 5, name: 'Vitya' },
    ]

    let messagesData = [
        { id: 1, message: 'wassup' },
        { id: 2, message: 'wasgud' },
        { id: 3, message: 'whats crackin' },
        { id: 4, message: 'whats crackin' },
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <h4>DIALOGS</h4>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                {/* <DialogItem name="Petya" id="3" />
                <DialogItem name="Alyosha" id="4" />
                <DialogItem name="Vitya" id="5" /> */}
            </div>
            <div className={classes.messages}>
                <h4>MESSAGES</h4>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message="what's crackin'" />
            </div>
        </div>
    )
}

export default Dialogs;