import styles from '../../../assets/styles/home/ScrollTopBtn.module.css';

function ScrollTopBtn() {
    const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth'})

    return (
        <button onClick={handleClick} className={styles.btn}>
            ⇑
        </button>
    )
}

export default ScrollTopBtn;