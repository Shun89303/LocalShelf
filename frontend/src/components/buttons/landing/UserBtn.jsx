import { useNavigate } from "react-router-dom";
import styles from '../../../assets/styles/button/Button.module.css';
import useProfile from "../../../contexts/profile/useProfile.js";

function UserBtn() {
    const { setDisplayUser, setDisplayPhone } = useProfile();
    const navigate = useNavigate();

    const handleUser = () => {
        setDisplayUser('');
        setDisplayPhone('');
        navigate('/auth');
    }

    return (
        <button onClick={handleUser} className={styles.btn}>
            User
        </button>
    )
}

export default UserBtn;