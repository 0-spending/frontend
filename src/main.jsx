import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';

import WritePost from './pages/write-post.jsx';
import ModifyProfile from './pages/modify_profile.jsx';
import HomeGuest from './pages/home-guest.jsx';
import HomeLogin from './pages/home-login.jsx';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage'; 
import GNB from './components/GNB';  // GNB 컴포넌트 추가
import '@fortawesome/fontawesome-free/css/all.min.css';

const router = createBrowserRouter([
  { path: '/', element: <HomeGuest /> },
  { path: '/write', element: <WritePost /> },
  { path: '/homelogin', element: <HomeLogin /> },
  { path: '/login', element: <LoginPage /> },          
  { path: '/signup', element: <SignupPage /> },   
  { path: '/profile', element: <ProfilePage /> },
  { path: '/profile/modify', element: <ModifyProfile /> },
]);

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <div>
      <GNB />  {/* GNB 네비게이션 바를 모든 페이지에 추가 */}
      <RouterProvider router={router} />
    </div>
  </ThemeProvider>
);

