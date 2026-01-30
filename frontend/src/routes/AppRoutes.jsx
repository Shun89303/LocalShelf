import { Routes, Route } from 'react-router-dom';
import HomeProtector from './HomeProtector';
import ProfileProtector from './ProfileProtector';
import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import ProfileLayout from '../layouts/profile/ProfileLayout';

function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/home' element={
                <HomeProtector>
                    <Home/>
                </HomeProtector>
            }/>
            <Route path='/auth' element={<Auth />}/>
            <Route path='/profile' element={
                <ProfileProtector>
                    <ProfileLayout>
                        <Profile />
                    </ProfileLayout>
                </ProfileProtector>
            }/>
            <Route path='*' element={<div>404 Page Not Found</div>}/>
        </Routes>
    )
}

export default AppRoutes;