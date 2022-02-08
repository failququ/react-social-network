import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileThunkCreator } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.setUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        setUserProfile: (profile) => {
            dispatch(getUserProfileThunkCreator(profile))
        }
    }
}

let WithUrlContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, mapDispatchToProps)(WithUrlContainerComponent);