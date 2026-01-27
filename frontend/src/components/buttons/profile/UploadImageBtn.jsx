import styles from '../../../assets/styles/button/Button.module.css';
import { useRef } from 'react';
import useProfile from '../../../contexts/profile/useProfile.js';

function UploadImageBtn() {
    const { setImages } = useProfile();
    const fileRef = useRef(null);

    const handleInput = (e) => {
        const files = Array.from(e.target.files);

        setImages(prev => {
            if (prev.length >= 5) return prev;

            const remaining = 5 - prev.length;
            return [ ...prev, ...files.slice(0, remaining)];
        });

        e.target.value = "";
    }

    return (
        <div>
            <input 
                type="file" 
                accept="image/*"
                multiple
                ref={fileRef}
                onChange={handleInput}
                hidden 
            />
            <button className={styles.btn} onClick={() => fileRef.current.click()}>
                Upload Image
            </button>
        </div>
    )
}

export default UploadImageBtn;