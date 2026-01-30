import { useNavigate } from "react-router-dom";
import styles from '../../../assets/styles/button/Button.module.css';
import useAuth from "../../../contexts/auth/useAuth.js";

function GuestBtn() {
    const { setJWT } = useAuth();
    const navigate = useNavigate();

    const handleGuest = () => {
        setJWT(null);
        localStorage.clear();
        navigate('/home');
    }

    return (
        <button onClick={handleGuest} className={styles.btn}>
            Guest
        </button>
    )
}

export default GuestBtn;