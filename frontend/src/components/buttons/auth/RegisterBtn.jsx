import { useNavigate } from "react-router-dom";
import useAuth from "../../../contexts/auth/useAuth";
import styles from '../../../assets/styles/button/Button.module.css';

function RegisterBtn() {
    const { handleRegister } = useAuth();
    const navigate = useNavigate();

    const handleRegisterRoute = async () => {
        const ok = await handleRegister();
        if (!ok) return;
        navigate('/home');
    }

    return (
        <button onClick={handleRegisterRoute} className={styles.btn}>
            Register
        </button>
    )
}

export default RegisterBtn;