import styles from '../../../assets/styles/button/Button.module.css';
import { useRef } from 'react';
import useProfile from '../../../contexts/profile/useProfile.js';

function UploadImageBtn() {
    const { setImages } = useProfile();
    const fileRef = useRef(null);

    const HandleUpload = (e) => {
        setImages([e.target.files[0]]);

        e.target.value = "";
    }

    return (
        <div>
            <input 
                type="file" 
                accept="image/*"
                ref={fileRef}
                onChange={HandleUpload}
                hidden 
            />
            <button className={styles.btn} onClick={() => fileRef.current.click()}>
                Upload Image
            </button>
        </div>
    )
}

export default UploadImageBtn;