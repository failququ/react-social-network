import { connect } from 'react-redux';
import Navbar from './Navbar';


let mapStateToProps = (state) => {
    return {
        friends: state.navBar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;