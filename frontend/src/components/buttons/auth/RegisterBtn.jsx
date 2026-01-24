import { useNavigate } from "react-router-dom";
import useAuth from "../../../contexts/auth/useAuth";
import styles from '../../../assets/styles/button/Button.module.css';

function RegisterBtn() {
    const { setRole } = useAuth();
    const navigate = useNavigate();

    const handleRegister = () => {
        setRole('user');
        navigate('/home');
    }

    return (
        <button onClick={handleRegister} className={styles.btn}>
            Register
        </button>
    )
}

export default RegisterBtn;