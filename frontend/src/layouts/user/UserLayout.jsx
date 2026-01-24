import { Outlet } from "react-router-dom";
import UserNavbar from "../../components/navigation/UserNavbar";

function UserLayout({ children }) {
    return (
        <div>
            <UserNavbar />
            <main>
                { children }
                <Outlet />
            </main>
        </div>
    )
}

export default UserLayout;