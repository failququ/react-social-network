import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://banner2.cleanpng.com/20180715/zio/kisspng-logo-font-flame-logo-5b4b2d7c3b73e0.2237387315316535002435.jpg" alt="" />
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;