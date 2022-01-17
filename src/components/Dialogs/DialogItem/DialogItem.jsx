import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img src="https://w7.pngwing.com/pngs/628/819/png-transparent-scalable-graphics-avatar-icon-tie-waiter-recruiter-cartoon-vector-tie-thumbnail.png" alt="" />
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}


export default DialogItem;