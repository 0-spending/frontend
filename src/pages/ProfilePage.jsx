// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // localStorage에서 저장된 닉네임을 가져옴
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
          {/* 글 작성 버튼은 회색이지만 클릭할 수 있도록 설정 */}
          <button className="write-btn">글 작성</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
