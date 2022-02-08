import { connect } from "react-redux";
import { followThunkCreator, getUsersThunkCreator, unfollowThunkCreator } from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../commons/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isLoading ? <Preloader /> : null}
                <Users usersTotalCount={this.props.usersTotalCount}
                    pageSize={this.props.pageSize}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.usersTotalCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followThunkCreator(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowThunkCreator(userId))
        },

        getUsers: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);