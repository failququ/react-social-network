import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import { setUserDataActionCreator } from '../../redux/authReducer';
import Header from './Header';


class HeaderContainer extends React.Component {

    componentDidMount() {

        authAPI.getUserData().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                this.props.setUserData(id, login, email)
            }
        })
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
            dispatch(setUserDataActionCreator(id, login, email));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);