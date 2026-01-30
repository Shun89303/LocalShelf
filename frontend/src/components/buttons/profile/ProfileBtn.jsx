import { useNavigate } from "react-router-dom";
import styles from '../../../assets/styles/button/Button.module.css';
import { fetchInfo } from "../../../api/AuthApi.js";
import useProfile from "../../../contexts/profile/useProfile.js";

function ProfileBtn() {
    const { setDisplayUser, setDisplayPhone } = useProfile();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleProfile = async () => {
        if (!token) {
            console.error('no token found');
            throw new Error();
        }

        const data = await fetchInfo();
        if (!data) {
            console.error('No token found, cannot fetch user info');
            throw new Error();
        }
        setDisplayUser(data.username);
        setDisplayPhone(data.phone);
        navigate('/profile');
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }

    return (
        <button onClick={handleProfile} className={styles.btn}>
            Profile
        </button>
    )
}

export default ProfileBtn;