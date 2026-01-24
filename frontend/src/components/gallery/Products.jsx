import Masonry from 'react-masonry-css';
import styles from '../../assets/styles/masonry/Masonry.module.css';
import imageStyle from '../../assets/styles/image/Image.module.css';

function Products() {
    const breakpoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    }

    const images = Object.values(
        import.meta.glob('../../assets/images/*.jpg', { eager: true, import: 'default'})
    )

    return (
        <Masonry
            breakpointCols={breakpoints}
            className={styles.masonryGrid}
            columnClassName={styles.masonryColumn}
        >
            { images.map((src, i) => (
                <img key={i} src={src} alt="image-preview" className={imageStyle.image}/>
            ))}
        </Masonry>
    )
}

export default Products;