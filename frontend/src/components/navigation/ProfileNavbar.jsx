import HomeBtn from '../buttons/home/HomeBtn';
import styles from '../../assets/styles/navigation/UserNavbar.module.css';

function ProfileNavbar() {

    return (
        <nav className={styles.navbar}>
            <HomeBtn />
        </nav>
    )
}

export default ProfileNavbar;