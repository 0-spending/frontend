import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';

// import Home from './pages/home.jsx'
import WritePost from './pages/write-post.jsx';
import HomeGuest from './pages/home-guest.jsx';
import HomeLogin from './pages/home-login.jsx';

const router = createBrowserRouter([
  { path: '/', element: <HomeGuest /> },
  { path: '/write', element: <WritePost /> },
  { path: '/homelogin', element: <HomeLogin /> },
])

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)