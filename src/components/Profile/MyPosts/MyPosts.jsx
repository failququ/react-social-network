import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsItems = props.posts
        .map((post, index) => <Post key={index} message={post.message} likes={post.likesCount} />)

    let newPost = React.useRef(null);

    let addPost = () => {
        let text = newPost.current.value;
        props.addPost(text);
    }

    return (
        <div className={classes.content}>
            <div>
                <h4>My posts</h4>
                <div>
                    <textarea ref={newPost}></textarea>
                    <button onClick={addPost} className={classes.btn}>Add post</button>
                </div>
                <div className={classes.posts}>
                    {postsItems}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;