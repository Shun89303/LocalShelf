import HomeContext from "./HomeContext.js";
import { useState } from "react";

function HomeProvider({ children }) {
    const [ gallery, setGallery ] = useState([]);
    const [ error, setError ] = useState(null);

    const value = {
        gallery, setGallery,
        error, setError,
    }

    return (
        <HomeContext.Provider value={value}>
            { children }
        </HomeContext.Provider>
    )
}

export default HomeProvider;