import { useState, useEffect } from 'react';
import { fetchInfo } from '../api/AuthApi.js';
import profileStyles from '../assets/styles/profile/Profile.module.css';
import ScrollTopBtn from '../components/buttons/home/ScrollTopBtn.jsx';
import UploadBtn from '../components/buttons/profile/UploadBtn.jsx';
import ProfileUploads from '../components/gallery/ProfileUploads.jsx';

function Profile() {

    const [ username, setUsername ] = useState('');
    const [ phone, setPhone ] = useState('');

    useEffect(() => {
        async function getInfo() {
            const data = await fetchInfo();
            if (!data) {
                throw new Error("No token found, cannot fetch user info");
            }
            setUsername(data.username);
            setPhone(data.phone);
        }
        getInfo();
    }, [])

    return (
        <div className={profileStyles.Cont}>
            <div className={profileStyles.userInfoCont}>
                <h1 className={profileStyles.header}>User Info</h1>
                <p className={profileStyles.user}>Username: {username}</p>
                <p className={profileStyles.phone}>Phone: {phone}</p>
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