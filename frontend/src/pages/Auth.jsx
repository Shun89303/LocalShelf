import UsernameInput from '../components/inputs/UsernameInput';
import MyanmarPhoneInput from '../components/inputs/MyanmarPhoneInput';
import PasswordInput from '../components/inputs/PasswordInput';
import RegisterBtn from '../components/buttons/auth/RegisterBtn';
import LoginBtn from '../components/buttons/auth/LoginBtn';
import authStyles from '../assets/styles/auth/Auth.module.css';
import useAuth from '../contexts/auth/useAuth';

function Auth() {
    const { error } = useAuth();
    return (
        <div className={authStyles.authCont}>
            <div className={authStyles.inputCont}>
                <UsernameInput />
                <MyanmarPhoneInput />
                <PasswordInput />
            </div>
            <div className={authStyles.btnCont}>
                <RegisterBtn />
                <LoginBtn />
            </div>
            { error && (
                <p>{error}</p>
            )}
        </div>
    )
}

export default Auth;