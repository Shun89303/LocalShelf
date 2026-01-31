import ProfileContext from "./ProfileContext.js";
import { useState, useEffect } from "react";
import { fetchInfo } from "../../api/AuthApi.js";
import useAuth from '../../contexts/auth/useAuth.js';

function ProfileProvider({ children }) {
    const [ images, setImages ] = useState([]);
    const [ uploads, setUploads ] = useState([]);
    const [ open, setOpen ] = useState(false);
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ displayUser, setDisplayUser ] = useState('');
    const [ displayPhone, setDisplayPhone ] = useState('');
    const [ error, setError ] = useState(null);
    const { jwt } = useAuth();

    useEffect(() => {
        const loadUser = async () => {
            const data = await fetchInfo();
            if (!data) {
                console.error('No token found, cannot fetch user info');
                throw new Error();
            }
            setDisplayUser(data.username);
            setDisplayPhone(data.phone);
        }
        loadUser();
    }, [jwt])

    const toggleUploadForm = () => {
        setName(''); 
        setPrice('') 
        setError(null) 
        setImages([]);
        setOpen(!open);
    }
    
    const value = {
        images, setImages,
        open, setOpen,
        toggleUploadForm,
        name, setName,
        price, setPrice, 
        error, setError,
        uploads, setUploads,
        phone, setPhone,
        displayUser, setDisplayUser,
        displayPhone, setDisplayPhone,
    }

    return (
        <ProfileContext.Provider value={value}>
            { children }
        </ProfileContext.Provider>
    )
}

export default ProfileProvider;