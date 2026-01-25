import UserLayout from "../layouts/user/UserLayout";
import GuestLayout from "../layouts/guest/GuestLayout";

function HomeProtector({ children }) {
    return localStorage.getItem('token') ? (
        <UserLayout>{ children }</UserLayout>
    ) : (
        <GuestLayout>{ children }</GuestLayout>
    )
}

export default HomeProtector;