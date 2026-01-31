import { useNavigate } from "react-router-dom";
import styles from '../../../assets/styles/button/Button.module.css';

function ProfileBtn() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleProfile = async () => {
        if (!token) {
            console.error('no token found');
            throw new Error();
        }

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