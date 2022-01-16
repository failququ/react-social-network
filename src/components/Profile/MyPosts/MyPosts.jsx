import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'hi, how are you', likesCount: 13 },
        { id: 2, message: 'its my first post', likesCount: 17 },
    ]


    return (
        <div className={classes.content}>
            <div>
                <h4>My posts</h4>
                <div>
                    <textarea></textarea>
                    <button className={classes.btn}>Add post</button>

                </div>
                <div className={classes.posts}>
                    <Post message={postsData[0].message} likes={postsData[0].likesCount} />
                    <Post message={postsData[1].message} likes={postsData[1].likesCount} />
                </div>
            </div>
        </div>
    )
}

export default MyPosts;