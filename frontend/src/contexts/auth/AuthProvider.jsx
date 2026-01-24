import { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
    const [ role, setRole ] = useState(null);

    const value = {
        role, setRole,
    }
    
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;