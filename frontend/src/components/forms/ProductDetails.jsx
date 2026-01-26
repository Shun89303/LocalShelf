import styles from '../../assets/styles/profile/ProductDetails.module.css';
import inStyle from '../../assets/styles/inputs/Input.module.css';
import useProfile from '../../contexts/profile/useProfile.js';

function ProductDetails() {
    const { name, setName, price, setPrice } = useProfile();
    return (
        <>
            <div className={styles.nameCont}>
                <label htmlFor="productName" className={styles.name}>
                    Name: 
                </label>
                <input 
                    type="text" 
                    id="productName" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="product name" 
                    className={inStyle.inputCustom} 
                />
            </div>
            <div className={styles.priceCont}>
                <label htmlFor="productName" className={styles.price}>
                    Price:
                </label>
                <input 
                    type="text" 
                    id="productName" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="product price (Optional)" 
                    className={inStyle.inputCustom} 
                />
            </div>
        </>
    )
}

export default ProductDetails;