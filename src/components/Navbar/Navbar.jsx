import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/profile">
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/dialogs">
                    Messages
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/news">
                    News
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/music">
                    Music
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/options">
                    Options
                </NavLink>
            </div>

            <div className={classes.item}>
                <Friends friends={props.friends} />
            </div>
        </nav>
    )
}

export default Navbar;