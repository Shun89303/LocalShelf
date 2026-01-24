import useAuth from '../../../contexts/auth/useAuth';
import { useNavigate } from "react-router-dom";
import styles from '../../../assets/styles/button/Button.module.css';

function GuestBtn() {
    const { setRole } = useAuth();
    const navigate = useNavigate();

    const handleGuest = () => {
        setRole('guest');
        navigate('/home');
    }

    return (
        <button onClick={handleGuest} className={styles.btn}>
            Guest
        </button>
    )
}

export default GuestBtn;