import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {



        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus} />
        )
    }
}



let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        setUserProfile: (profile) => {
            dispatch(getUserProfileThunkCreator(profile))
        },

        getUserStatus: (userId) => {
            dispatch(getUserStatusThunkCreator(userId))
        },

        updateUserStatus: (status) => {
            dispatch(updateUserStatusThunkCreator(status))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
