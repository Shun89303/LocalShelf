import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function ProfileProtector({ children }) {
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            window.alert("Guests do not have the privilege to visit this page");
        }
    }, [token])

    if (!token) {
        return <Navigate to='/' replace/>
    }

    return children;
}

export default ProfileProtector;