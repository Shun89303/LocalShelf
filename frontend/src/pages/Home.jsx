import Products from "../components/gallery/Products";
import styles from '../assets/styles/home/Home.module.css';
import ScrollTopBtn from "../components/buttons/home/ScrollTopBtn";

function Home() {
    return (
        <div>
            <h1 className={styles.header}>Products</h1>
            <Products />
            <ScrollTopBtn />
        </div>
    )
}

export default Home;