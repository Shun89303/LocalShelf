import ProfileContext from "./ProfileContext.js";
import { useState } from "react";

function ProfileProvider({ children }) {
    const [ images, setImages ] = useState([]);
    const [ open, setOpen ] = useState(false);
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');

    const toggleUploadForm = () => {
        setOpen(!open);
    }
    
    const value = {
        images, setImages,
        open, setOpen,
        toggleUploadForm,
        name, setName,
        price, setPrice, 
    }

    return (
        <ProfileContext.Provider value={value}>
            { children }
        </ProfileContext.Provider>
    )
}

export default ProfileProvider;