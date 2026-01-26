import styles from '../../../assets/styles/button/Button.module.css';
import { useRef } from 'react';
import useProfile from '../../../contexts/profile/useProfile.js';

function UploadImageBtn() {
    const { setImages } = useProfile();
    const fileRef = useRef(null);

    return (
        <div>
            <input 
                type="file" 
                accept="image/*"
                multiple
                ref={fileRef}
                onChange={(e) => setImages(Array.from(e.target.files))}
                hidden 
            />
            <button className={styles.btn} onClick={() => fileRef.current.click()}>
                Upload Image
            </button>
        </div>
    )
}

export default UploadImageBtn;