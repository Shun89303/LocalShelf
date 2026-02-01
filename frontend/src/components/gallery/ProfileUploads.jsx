import { useEffect } from "react";
import useProfile from "../../contexts/profile/useProfile.js";
import Masonry from "react-masonry-css";
import styles from '../../assets/styles/masonry/Masonry.module.css';
import imageStyle from '../../assets/styles/image/Image.module.css';
import formatMyanmarLocal from '../../utils/formatMyanmarLocal.js';
import DeleteBtn from "../buttons/profile/DeleteBtn.jsx";

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
                console.error(err.error);
                return;
            }

            const data = await res.json();
            setUploads(data.images);
        }
        fetchImages();
        
    }, [])

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
            { uploads && uploads.map((product) => (
                <div key={product._id} className={imageStyle.card}>
                    { product.images.length > 0 ? (
                        product.images.map((img, index) => (
                        <>
                            <img key={index} src={`/${img}`} alt="loading image/no image uploaded" className={imageStyle.image}/>
                            <DeleteBtn id={ product._id } path={ img }/>
                            <div className={imageStyle.overlay}>
                                <div className={imageStyle.descCont}>
                                    <h3 className={imageStyle.name}>Name: {product.name}</h3>
                                    <p className={imageStyle.price}>Price: ${product.price}</p>
                                    <p className={imageStyle.phone}>Phone: { formatMyanmarLocal(product.phone) }</p>
                                </div>
                            </div>
                        </>
                        )   
                    ) ) : (
                        <>
                            <DeleteBtn id={ product._id }/>
                            <div className={imageStyle.plainCont}>
                                <h3 className={imageStyle.name}>Name: {product.name}</h3>
                                <p className={imageStyle.price}>Price: ${product.price}</p>
                                <p className={imageStyle.phone}>Phone: { formatMyanmarLocal(product.phone) }</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </Masonry>
    )
}

export default ProfileUploads;