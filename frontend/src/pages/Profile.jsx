import { useState, useEffect } from 'react';
import { fetchInfo } from '../api/AuthApi.js';
import profileStyles from '../assets/styles/profile/Profile.module.css';
import styles from '../assets/styles/button/Button.module.css';
import image1 from '../assets/images/item1.jpg';
import image2 from '../assets/images/item10.jpg';
import ScrollTopBtn from '../components/buttons/home/ScrollTopBtn';

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
                <input type="file" hidden/>
                <button className={styles.btn}>Upload Product</button>
            </div>
            <div className={profileStyles.galleryCont}>
                <h2 className={profileStyles.header}>Uploaded Products</h2>
                <div>
                    <img src={image1} alt="uploade_image" style={{width: "200px", border: "2px solid black", borderRadius: "20px", marginRight: "10px"}}/>
                    <img src={image2} alt="uploade_image" style={{width: "200px", border: "2px solid black", borderRadius: "20px"}} />
                </div>
            </div>
            <ScrollTopBtn />
        </div>
    )
}

export default Profile;