import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                Main content
            </div>
            <div>
                <img src="https://www.admethics.com/wp-content/uploads/2020/04/mindlake.jpg" alt="" />
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;