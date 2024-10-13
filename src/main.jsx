import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage'; 
import GNB from './components/GNB';  // GNB 컴포넌트 임포트
import '@fortawesome/fontawesome-free/css/all.min.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <Router>
      <div>
        <GNB />  {/* 네비게이션 바를 모든 페이지에 추가 */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

