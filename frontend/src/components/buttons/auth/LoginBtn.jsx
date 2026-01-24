import { useNavigate } from "react-router-dom";
import useAuth from "../../../contexts/auth/useAuth";
import styles from '../../../assets/styles/button/Button.module.css';

function LoginBtn() {
    const { setRole } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        setRole('user');
        navigate('/home');
    }

    return (
        <button onClick={handleLogin} className={styles.btn}>
            Login
        </button>
    )
}

export default LoginBtn;