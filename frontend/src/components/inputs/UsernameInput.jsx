import styles from '../../assets/styles/inputs/Input.module.css';
import useAuth from '../../contexts/auth/useAuth';

function UsernameInput() {
    const { user, setUser } = useAuth();
    return (
        <input 
            type="text" 
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder='Enter username'
            className={styles.inputCustom}
        />
    )
}

export default UsernameInput;