import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

    let posts = [
        { id: 1, message: 'hi, how are you', likesCount: 13 },
        { id: 2, message: 'its my first post', likesCount: 17 },
        { id: 3, message: 'NEW STATUS', likesCount: 6 },
        { id: 4, message: 'LIFE IS BEAUTIFUL', likesCount: 28 },
    ]

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </div>
    )
}

export default Profile;