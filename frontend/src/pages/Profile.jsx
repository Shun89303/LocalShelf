import profileStyles from '../assets/styles/profile/Profile.module.css';
import ScrollTopBtn from '../components/buttons/home/ScrollTopBtn.jsx';
import UploadBtn from '../components/buttons/profile/UploadBtn.jsx';
import ProfileUploads from '../components/gallery/ProfileUploads.jsx';
import useProfile from '../contexts/profile/useProfile.js';

function Profile() {
    const { displayUser, displayPhone } = useProfile();

    return (
        <div className={profileStyles.Cont}>
            <div className={profileStyles.userInfoCont}>
                <h1 className={profileStyles.header}>User Info</h1>
                <p className={profileStyles.user}>Username: {displayUser}</p>
                <p className={profileStyles.phone}>Phone: {displayPhone}</p>
            </div>
            <div className={profileStyles.buttonCont}>
                <UploadBtn />
            </div>
            <div className={profileStyles.galleryCont}>
                <h2 className={profileStyles.header}>Uploaded Products</h2>
                <ProfileUploads />
            </div>
            <ScrollTopBtn />
        </div>
    )
}

export default Profile;