import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../assets/profile_image.png';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기

const UserInfoContainer = styled.section`
    width:270px;
    height:224px;
    text-align: center;
`;

// 이미지 작업
const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
`;


// 초록색 시작하기 버튼
const Button = styled.button` 
  background-color: ${(props) => props.theme.colors.primary[400]}; 
  color: white;
  border: 1px solid rgba(0,0,0,0.5);
  width:270px;
  height:53px;
  margin-top: 20px;

  padding: 16px;
  cursor: pointer;
  border-radius: 8px;
  
  &:hover {
    border: 1px solid rgba(0,0,0,1); 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
`;

const UserInfo = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용
  
    const handleSignup = () => {
      navigate('/signup'); // /signup 경로로 이동
    };
  
    return (
      <UserInfoContainer>
        <Avatar src={ProfileImage} alt="User Avatar" />
        <h2>고다윤 님</h2>
        <Button onClick={handleSignup}>시작하기</Button>
      </UserInfoContainer>
    );
  };

export default UserInfo;
