import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';

import WritePost from './pages/write-post.jsx';
import ModifyProfile from './pages/modify_profile.jsx';
import HomeGuest from './pages/home-guest.jsx';
import HomeLogin from './pages/home-login.jsx';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage'; 

const router = createBrowserRouter([
  { path: '/', element: <HomeGuest /> },
  { path: '/write', element: <WritePost /> },
  { path: '/homelogin', element: <HomeLogin /> },
  { path: '/login', element: <LoginPage /> },          
  { path: '/signup', element: <SignupPage /> },   
  {
    path: '/profile',
    element: <ProfilePage />,
    children: [
      { path: 'modify', element: <ModifyProfile /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)