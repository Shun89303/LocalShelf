import { useNavigate } from "react-router-dom";
import styles from '../../../assets/styles/button/Button.module.css';

function HomeBtn() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home');
    }

    return (
        <button onClick={handleHome} className={styles.btn}>
            Home
        </button>
    )
}

export default HomeBtn;