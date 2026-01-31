import useProfile from "../../contexts/profile/useProfile.js";
import styles from '../../assets/styles/image/ImagePreview.module.css';

function ImagePreview() {
    const { images, setImages } = useProfile();

    const removeImage = (indexToRemove) => {
        setImages(prev => 
            prev.filter((_, index) => index !== indexToRemove)
        );
    };

    return (
        <div className={styles.imgCont}>
            { images.length > 0 && (
                images.map((image, index) => (
                    <img 
                        className={styles.image} 
                        key={index} 
                        src={URL.createObjectURL(image)} 
                        alt="image_preview" 
                        onClick={() => removeImage(index)}
                    />
                ))
            )}
        </div>
    )
}

export default ImagePreview;