import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfileActionCreator } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        profileAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })
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
            dispatch(setUserProfileActionCreator(profile))
        }
    }
}

let WithUrlContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, mapDispatchToProps)(WithUrlContainerComponent);