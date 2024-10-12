// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-box">
        <div className="icon-container">
          <i className="fa fa-user-circle icon"></i> {/* 기본 프로필 사진 */}
        </div>
        <h2>{username} 님</h2>
        <div className="button-group">
          <button className="profile-btn">프로필 수정</button>
          <button className="write-btn">글 작성</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
