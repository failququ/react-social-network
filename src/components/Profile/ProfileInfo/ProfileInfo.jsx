import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                Main content
            </div>
            <div>
                <img className={classes.mainImg} src="https://www.admethics.com/wp-content/uploads/2020/04/mindlake.jpg" alt="" />
            </div>
            <div className={classes.description}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;