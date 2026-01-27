import { useEffect } from "react";
import useProfile from "../../contexts/profile/useProfile.js";
import Masonry from "react-masonry-css";
import styles from '../../assets/styles/masonry/Masonry.module.css';
import imageStyle from '../../assets/styles/image/Image.module.css';

function ProfileUploads() {
    const { uploads, setUploads } = useProfile();

    useEffect(() => {
        async function fetchImages() {
            const res = await fetch('/api/products/me', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            if (!res.ok) {
                const err = await res.json();
                window.alert(err.error);
                return;
            }

            const data = await res.json();
            setUploads(data.images);
        }
        fetchImages();
        
    }, [setUploads])

    const breakpoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    }

    return (
        <Masonry
            breakpointCols={breakpoints}
            className={styles.masonryGrid}
            columnClassName={styles.masonryColumn}
        >
            { uploads && uploads.map((image, index) => (
                <img key={index} src={`/${image.images}`} alt="image-preview" className={imageStyle.image}/>
            ))}
        </Masonry>
    )
}

export default ProfileUploads;