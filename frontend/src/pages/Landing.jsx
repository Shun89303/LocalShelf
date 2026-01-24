import GuestBtn from '../components/buttons/landing/GuestBtn';
import UserBtn from '../components/buttons/landing/UserBtn';
import styles from '../assets/styles/landing/Landing.module.css';

function Landing() {
    return (
        <div className={styles.landingCont}>
            <h1 className={styles.heading}>Welcome to Local Shelf</h1>
            <p className={styles.option}>Choose access option</p>
            <div className={styles.btnCont}>
                <GuestBtn />
                <UserBtn />
            </div>
        </div>
    )
}

export default Landing;