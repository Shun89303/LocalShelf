import AuthProvider from './contexts/auth/AuthProvider.jsx';
import ProfileProvider from './contexts/profile/ProfileProvider.jsx';
import HomeProvider from './contexts/home/HomeProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProfileProvider>
          <HomeProvider>
            <App />
          </HomeProvider> 
        </ProfileProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)