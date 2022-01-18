import classes from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={classes.friendItem}>
            <img src="https://w7.pngwing.com/pngs/628/819/png-transparent-scalable-graphics-avatar-icon-tie-waiter-recruiter-cartoon-vector-tie-thumbnail.png" alt="" />
            {props.name}
        </div>
    )
}

export default Friend;