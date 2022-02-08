import React from 'react';
import { connect } from 'react-redux';
import { setUserDataThunkCreator } from '../../redux/authReducer';
import Header from './Header';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setUserData();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (id, login, email) => {
            dispatch(setUserDataThunkCreator(id, login, email));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);