import { Outlet } from "react-router-dom";

function GuestLayout({ children }) {
    return (
        <div>
            <main>
                { children }
                <Outlet />
            </main>
        </div>
    )
}

export default GuestLayout;