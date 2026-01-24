import { useNavigate } from "react-router-dom";
import styles from '../../../assets/styles/button/Button.module.css';

function UserBtn() {
    const navigate = useNavigate();

    const handleUser = () => {
        navigate('/auth');
    }

    return (
        <button onClick={handleUser} className={styles.btn}>
            User
        </button>
    )
}

export default UserBtn;