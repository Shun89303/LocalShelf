import { Outlet } from "react-router-dom";
import ProfileNavbar from '../../components/navigation/ProfileNavbar';

function ProfileLayout({ children }) {
    return (
        <div>
            <ProfileNavbar />
            <main>
                { children }
                <Outlet />
            </main>
        </div>
    )
}

export default ProfileLayout;