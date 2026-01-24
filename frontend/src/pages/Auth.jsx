import RegisterBtn from '../components/buttons/auth/RegisterBtn';
import LoginBtn from '../components/buttons/auth/LoginBtn';
import MyanmarPhoneInput from '../components/inputs/MyanmarPhoneInput';
import styles from '../assets/styles/inputs/Input.module.css';
import authStyles from '../assets/styles/auth/Auth.module.css';

function Auth() {
    return (
        <div className={authStyles.authCont}>
            <div className={authStyles.inputCont}>
                <input 
                    type="text" 
                    placeholder='Enter username'
                    className={styles.inputCustom}
                />
                <MyanmarPhoneInput />
                <input 
                    type="password" 
                    placeholder='Enter password'
                    className={styles.inputCustom}
                />
            </div>
            <div className={authStyles.btnCont}>
                <RegisterBtn />
                <LoginBtn />
            </div>
        </div>
    )
}

export default Auth;