import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../contexts/auth/useAuth";

function ProfileProtector({ children }) {
    const { role } = useAuth();

    useEffect(() => {
        if ( role !== 'user') {
            window.alert("Guests do not have the privilege to visit this page");
        }
    }, [role])

    if ( role !== 'user') {
        return <Navigate to='/' replace/>
    }

    return children;
}

export default ProfileProtector;