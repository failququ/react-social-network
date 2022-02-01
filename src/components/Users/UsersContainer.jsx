import { connect } from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, setUsersTotalCountActionCreator, toggleIsLoadingActionCreator, unfollowActionCreator } from "../../redux/usersReducer";
import * as axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../commons/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(response.data.items)
            })
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
            dispatch(followActionCreator(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },

        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        },

        toggleIsLoading: (isLoading) => {
            dispatch(toggleIsLoadingActionCreator(isLoading))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);