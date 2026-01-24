import useAuth from "../contexts/auth/useAuth";
import UserLayout from "../layouts/user/UserLayout";
import GuestLayout from "../layouts/guest/GuestLayout";

function HomeProtector({ children }) {
    const { role } = useAuth();
    return role === 'user' ? (
        <UserLayout>{ children }</UserLayout>
    ) : (
        <GuestLayout>{ children }</GuestLayout>
    )
}

export default HomeProtector;