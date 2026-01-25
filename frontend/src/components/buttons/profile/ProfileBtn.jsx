import { useNavigate } from "react-router-dom";
import styles from '../../../assets/styles/button/Button.module.css';

function ProfileBtn() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleProfile = () => {
        if (!token) {
            throw new Error("No token found");
        }
        navigate('/profile');
    }

    return (
        <button onClick={handleProfile} className={styles.btn}>
            Profile
        </button>
    )
}

export default ProfileBtn;