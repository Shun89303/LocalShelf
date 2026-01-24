import ProfileBtn from "../buttons/profile/ProfileBtn";
import styles from '../../assets/styles/navigation/UserNavbar.module.css';

function UserNavbar() {

    return (
        <nav className={styles.navbar}>
            <ProfileBtn />
        </nav>
    )
}

export default UserNavbar;