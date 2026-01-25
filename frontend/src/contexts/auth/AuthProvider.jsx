import { useState } from "react";
import AuthContext from "./AuthContext";
import { usernameCleaner, phoneCleaner, passwordCleaner } from '../../utils/validators';
import { fetchRegister, fetchLogin } from "../../api/AuthApi";

function AuthProvider({ children }) {
    const [ user, setUser ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ error, setError ] = useState(null);
    const [ jwt, setJWT ] = useState(localStorage.getItem('token') || null);

    const handleRegister = async () => {
        setError(null);

        const cleanUser = usernameCleaner(user);
        const cleanPhone = phoneCleaner(phone);
        const cleanPass = passwordCleaner(pass);

        if (!cleanUser || !cleanPhone || !cleanPass) {
            setError("Invalid Username/Phone Number/Password");
            return;
        }

        try {
            await fetchRegister(cleanUser, cleanPhone, cleanPass, setJWT);
            setUser('');
            setPhone('');
            setPass('');
            return true;
        } catch (error) {
            setError(error.message);
            return false;
        }
    }

    const handleLogin = async () => {
        setError(null);

        const cleanUser = usernameCleaner(user);
        const cleanPhone = phoneCleaner(phone);
        const cleanPass = passwordCleaner(pass);

        if (!cleanUser || !cleanPhone || !cleanPass) {
            setError("Invalid Username/Phone Number/Password");
            return;
        }

        try {
            await fetchLogin(cleanUser, cleanPhone, cleanPass, setJWT);
            setUser('');
            setPhone('');
            setPass('');
            return true;
        } catch (error) {
            setError(error.message);
            return false;
        }
    }

    const value = {
        user, setUser, 
        phone, setPhone, 
        pass, setPass, 
        error, setError,
        jwt, setJWT,
        handleRegister, handleLogin,
    }
    
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;