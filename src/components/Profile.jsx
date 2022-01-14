import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                Main content
            </div>
            <div>
                <img src="https://www.admethics.com/wp-content/uploads/2020/04/mindlake.jpg" alt="" />
            </div>
            <div>
                ava + descr
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>post 1</div>
                    <div className={classes.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;