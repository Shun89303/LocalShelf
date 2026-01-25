import { useNavigate } from "react-router-dom";
import useAuth from "../../../contexts/auth/useAuth";
import styles from '../../../assets/styles/button/Button.module.css';

function LoginBtn() {
    const { handleLogin } = useAuth();
    const navigate = useNavigate();

    const handleLoginRoute = async () => {
        const ok = await handleLogin();
        if (!ok) return;
        navigate('/home');
    }

    return (
        <button onClick={handleLoginRoute} className={styles.btn}>
            Login
        </button>
    )
}

export default LoginBtn;