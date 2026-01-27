import Masonry from 'react-masonry-css';
import styles from '../../assets/styles/masonry/Masonry.module.css';
import imageStyle from '../../assets/styles/image/Image.module.css';
import { useEffect } from 'react';
import { fetchAllImages } from '../../api/HomeApi.js';
import useHome from '../../contexts/home/useHome.js';

function Products() {
    const { setError, gallery, setGallery } = useHome();

    useEffect(() => {
        async function getImages() {
            const data = await fetchAllImages();

            if (!data) {
                setError("No images found");
                return;
            }
            setGallery(data);
        }
        getImages();
    }, [setError, setGallery])

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
            { gallery && gallery.map((src, i) => (
                <img key={i} src={`/${src.images}`} alt="image-preview" className={imageStyle.image}/>
            ))}
        </Masonry>
    )
}

export default Products;