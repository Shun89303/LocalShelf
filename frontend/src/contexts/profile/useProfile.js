import { useContext } from "react";
import ProfileContext from "./ProfileContext.js";

function useProfile() {
    const context = useContext(ProfileContext);
    if (context === null) {
        console.error("useProfile must be used inside ProfileProvider");
        throw new Error();
    }
    return context;
}

export default useProfile;