import ProfileContext from "./ProfileContext.js";
import { useState } from "react";

function ProfileProvider({ children }) {
    const [ images, setImages ] = useState([]);
    const [ uploads, setUploads ] = useState([]);
    const [ open, setOpen ] = useState(false);
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ error, setError ] = useState(null);

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
    }

    return (
        <ProfileContext.Provider value={value}>
            { children }
        </ProfileContext.Provider>
    )
}

export default ProfileProvider;