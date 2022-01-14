import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://w7.pngwing.com/pngs/628/819/png-transparent-scalable-graphics-avatar-icon-tie-waiter-recruiter-cartoon-vector-tie-thumbnail.png" alt="" />
            {props.message}
            <div>
                <span>likes: {props.likes}</span>
            </div>
        </div>

    )
}

export default Post;