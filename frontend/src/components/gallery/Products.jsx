import Masonry from 'react-masonry-css';
import styles from '../../assets/styles/masonry/Masonry.module.css';
import imageStyle from '../../assets/styles/image/Image.module.css';
import { useEffect } from 'react';
import { fetchAllImages } from '../../api/HomeApi.js';
import useHome from '../../contexts/home/useHome.js';
import formatMyanmarLocal from '../../utils/formatMyanmarLocal.js';

function Products() {
    const { setError, gallery, setGallery } = useHome();

    useEffect(() => {
        async function getImages() {
            const data = await fetchAllImages();

            if (!data) {
                setError("No images found");
                return;
            }
            setGallery(data.images);
        }
        getImages();
    }, [setError, setGallery])

    const breakpoints = {
        default: 4,
        1100: 3,
    }

    return (
        <Masonry
            breakpointCols={breakpoints}
            className={styles.masonryGrid}
            columnClassName={styles.masonryColumn}
        >
            { gallery.map((post) => (
                <div key={post._id.toString()} className={imageStyle.card}>
                    { post.images.length > 0 ? (
                        post.images.map((img, index) => (
                            <>
                                <img key={index} src={`/${img}`} alt="image-preview" className={imageStyle.image}/>
                                <div className={imageStyle.overlay}>
                                    <div className={imageStyle.descCont}>
                                        <h3 className={imageStyle.name}>Name: {post.name}</h3>
                                        <p className={imageStyle.price}>Price: ${post.price}</p>
                                        <p className={imageStyle.phone}>Phone: { formatMyanmarLocal(post.phone) }</p>
                                    </div>
                                </div>
                            </>
                        ))
                    ) : (
                        <>
                            <div className={imageStyle.descCont}>
                                <h3 className={imageStyle.name}>Name: {post.name}</h3>
                                <p className={imageStyle.price}>Price: ${post.price}</p>
                                <p className={imageStyle.phone}>Phone: { formatMyanmarLocal(post.phone) }</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </Masonry>
    )
}

export default Products;