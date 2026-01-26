import styles from '../../../assets/styles/button/Button.module.css';
import useProfile from '../../../contexts/profile/useProfile.js';
import ProductUploadForm from '../../forms/ProductUploadForm.jsx';

function UploadBtn() {
    const { open, toggleUploadForm } = useProfile();

    return (
        <div>
            <button className={styles.btn} onClick={toggleUploadForm}>
                Upload Product
            </button>
            { open && <ProductUploadForm />}
        </div>
    )
}

export default UploadBtn;