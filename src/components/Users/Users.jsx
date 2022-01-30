import React from "react";
import classes from './Users.module.css';
import userAvatar from '../../assets/images/user.png'

const Users = (props) => {


    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 20)
            pages.push(i);
    }

    return (

        <div>
            <div className={classes.pages}>
                {pages.map((page, index) => {
                    return <span key={index} onClick={() => { props.onPageChange(page) }}
                        className={props.currentPage === page && classes.selectedPage}>{page}</span>
                })}

            </div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userAvatar} className={classes.userAvatar} alt="USER_AVATAR" />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>"user.location.country, user.location.city"</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}


export default Users;