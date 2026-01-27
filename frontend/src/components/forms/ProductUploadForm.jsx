import CloseBtn from "../buttons/profile/CloseBtn.jsx";
import styles from '../../assets/styles/profile/ProductUploadForm.module.css';
import btnStyle from '../../assets/styles/button/Button.module.css';
import UploadImageBtn from "../buttons/profile/UploadImageBtn.jsx";
import ImagePreview from '../gallery/ImagePreview.jsx';
import ProductDetails from '../forms/ProductDetails.jsx';
import { HandleUpload } from '../../api/ProfileApi.js';
import useProfile from "../../contexts/profile/useProfile.js";

function ProductUploadForm() {
    const { error } = useProfile();

    const uploadProduct = HandleUpload();

    return (
        <div className={styles.mainCont}>
            <div className={styles.contentCont}>
                <CloseBtn />
                <h1>Product Details</h1>
                <UploadImageBtn />
                <ImagePreview />
                <ProductDetails />
                <button className={btnStyle.btn} onClick={uploadProduct}>
                    Upload
                </button>
                { error && (
                    <p>
                        { error }
                    </p>
                )}
            </div>
        </div>
    )
}

export default ProductUploadForm;