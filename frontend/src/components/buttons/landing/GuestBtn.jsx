import { useNavigate } from "react-router-dom";
import styles from '../../../assets/styles/button/Button.module.css';

function GuestBtn() {
    const navigate = useNavigate();

    const handleGuest = () => {
        navigate('/home');
    }

    return (
        <button onClick={handleGuest} className={styles.btn}>
            Guest
        </button>
    )
}

export default GuestBtn;