import classes from './ProfileInfo.module.css';
import Preloader from '../../commons/Preloader/Preloader'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div style={{ 'fontWeight': 'bold' }}>
                PROFILE PAGE
            </div>
            <div className={classes.description}>
                <div>
                    <img src={props.profile.photos.large} alt='USER_AVATAR' />
                </div>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
                <div>
                    Full name: <br />
                    {props.profile.fullName}
                </div>
                <div>
                    Contacts: <br />
                    {props.profile.contacts.vk}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;