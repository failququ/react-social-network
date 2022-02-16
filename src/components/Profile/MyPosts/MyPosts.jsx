import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsItems = props.posts
        .map((post, index) => <Post key={index} message={post.message} likes={post.likesCount} />)


    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.content}>
            <div>
                <h4>Posts:</h4>
                <div className={classes.posts}>
                    {postsItems}
                </div>
                <ReduxAddPostForm onSubmit={addNewPost} />
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newPostText"} placeholder="enter your post text" />
            <button className={classes.btn}>Add post</button>
        </form>
    )
}

const ReduxAddPostForm = reduxForm({ form: "addPostForm" })(AddPostForm)

export default MyPosts;