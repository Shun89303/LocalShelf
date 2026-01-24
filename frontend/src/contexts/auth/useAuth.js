import { useContext } from "react";
import AuthContext from "./AuthContext";

function useAuth() {
    const context = useContext(AuthContext);
    if (context === null) {
        console.error("useAuth must be used inside AuthProvider");
        throw new Error();
    }
    return context;
}

export default useAuth;