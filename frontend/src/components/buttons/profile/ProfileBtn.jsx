import { useNavigate } from "react-router-dom";
import styles from '../../../assets/styles/button/Button.module.css';

function ProfileBtn() {
    const navigate = useNavigate();

    const handleProfile = () => {
        navigate('/profile');
    }

    return (
        <button onClick={handleProfile} className={styles.btn}>
            Profile
        </button>
    )
}

export default ProfileBtn;