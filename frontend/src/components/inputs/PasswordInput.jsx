import styles from '../../assets/styles/inputs/Input.module.css';
import useAuth from '../../contexts/auth/useAuth';

function PasswordInput() {
    const { pass, setPass } = useAuth();
    
    return (
        <input 
            type="password" 
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder='Enter password'
            className={styles.inputCustom}
        />
    )
}

export default PasswordInput;