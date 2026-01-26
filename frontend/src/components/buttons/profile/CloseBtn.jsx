import useProfile from "../../../contexts/profile/useProfile.js";
import styles from '../../../assets/styles/profile/CloseBtn.module.css';

function CloseBtn() {
    const { toggleUploadForm } = useProfile();
    return (
        <button 
            className={styles.btn}
            onClick={toggleUploadForm} >
            ✖
        </button>
    )
}

export default CloseBtn;