import Friend from './Friend/Friend';
import classes from './Friends.module.css';


const Friends = (props) => {

    // DATA MAPPING
    let friendsItems = props.friends
        .map(friend => <Friend key={friend.id} name={friend.name} />);

    return (
        <div className={classes.friendsBlock}>
            Friends
            <div className={classes.friends}>
                {friendsItems}
            </div>
        </div>
    )
}

export default Friends;