import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>

                </div>
                <div className={classes.posts}>
                    <Post message='hi, how are you' likes={13} />
                    <Post message="it's my first message" likes={17} />
                </div>

            </div>
        </div>
    )
}

export default MyPosts;