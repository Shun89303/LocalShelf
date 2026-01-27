import { useContext } from "react";
import HomeContext from "./HomeContext.js";

function useHome() {
    const context = useContext(HomeContext);

    if (context === null) {
        console.error("useHome must be used inside HomeProvider");
    }

    return context;
}

export default useHome;