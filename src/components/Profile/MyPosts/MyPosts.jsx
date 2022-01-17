import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsItems = props.posts.map(post => <Post message={post.message} likes={post.likesCount} />)

    return (
        <div className={classes.content}>
            <div>
                <h4>My posts</h4>
                <div>
                    <textarea></textarea>
                    <button className={classes.btn}>Add post</button>

                </div>
                <div className={classes.posts}>
                    {postsItems}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;