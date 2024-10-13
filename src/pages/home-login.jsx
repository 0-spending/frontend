// 홈페이지 - 메인홈(회원)

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserInfoLogin from '../components/homepage/userinfo-login';
import ExpenseList from '../components/homepage/expenselist';
import Calendar from '../components/homepage/calendar';
import ExpenseText from '../components/homepage/expensetext';
import GNB from '../components/GNB'

const HomeLoginContainer = styled.div`
  position: relative; /* 부모 요소를 relative로 설정 */
  width: 100%;
  min-height: 100vh; /* 화면의 최소 높이를 100vh로 설정 */
  background-color: #f0f0f0; /* 배경색 추가 */
  padding: 0; /* 패딩이 없도록 설정 */
  box-sizing: border-box; /* 패딩이 포함된 크기 계산 */
  overflow-y: auto; /* 세로 스크롤이 생길 때 스크롤 영역도 배경 적용 */
`;

const UserInfoWrapper = styled.div`
  position: absolute;
  top: 180px; 
  right: 880px;
`;

const ExpenseListWrapper = styled.div`
  position: absolute;
  top: 80px; 
  right: 103px; 
`;

const CalendarWrapper = styled.div`
  position: relative;
  top: 550px;
  left:0;
  width: fit-content;
  margin-bottom:100px;
`

const ExpenseTextWrapper = styled.div`
  position: absolute;
  top: 550px; 
  right: 105px; 
`;

// 위쪽 타원
const OvalBackground1 = styled.div` 
  width: 825px;  /* 타원의 가로 길이 */
  height: 693.6px; /* 타원의 세로 길이 */
  background-color: rgb(0,0,0,0.02); /* 배경색 */
  border-radius: 50%; /* 둥근 모서리, 50%로 설정하면 타원이 됨 */
  position: absolute; /* 원하는 위치에 배치 */
  top: 0px; /* 화면 상단에서 100px 띄움 */
  left: 559px; /* 화면 왼쪽에서 50px 띄움 */
`;

// 아래쪽 타원
const OvalBackground2 = styled.div`
  width: 825px;  /* 타원의 가로 길이 */
  height: 693.6px; /* 타원의 세로 길이 */
  background-color: rgb(0,0,0,0.02); /* 배경색 */
  border-radius: 50%; /* 둥근 모서리, 50%로 설정하면 타원이 됨 */
  position: absolute; /* 원하는 위치에 배치 */
  top: 479.4px; /* 화면 상단에서 100px 띄움 */
  left: 0px; /* 화면 왼쪽에서 50px 띄움 */
`;

const HomeLogin = () => {
    const [expenses, setExpenses] = useState([ // 여기에 데이터 가져오기

        { date: '2024-10-1', name: '영화', amount: 15000 }, // ui확인용 임시데이터
        { date: '2024-10-5', name: '커피', amount: 3000 },
        { date: '2024-10-10', name: '책', amount: 20000 },
    ]);
  
    useEffect(() => {
      // 백엔드에서 데이터를 가져오는 함수
      const fetchData = async () => {
        try {
          const response = await fetch('API_ENDPOINT'); // API 주소 입력
          const data = await response.json();
          setExpenses(data); // 데이터를 상태에 저장
        } catch (error) {
          console.error('Error fetching expenses:', error);
        }
      };
      
      fetchData(); // 컴포넌트가 마운트되면 호출
    }, []);
  
    return (
      <>
        <GNB />
        <HomeLoginContainer>
          <OvalBackground1></OvalBackground1>
          <OvalBackground2></OvalBackground2>
          <UserInfoWrapper>
            <UserInfoLogin />
          </UserInfoWrapper>
    
          <ExpenseListWrapper>
            <ExpenseList />
          </ExpenseListWrapper>
    
          <CalendarWrapper>
            <Calendar expenses={expenses} /> {/* 데이터를 캘린더에 전달 */}
          </CalendarWrapper>
    
          <ExpenseTextWrapper>
            <ExpenseText />
          </ExpenseTextWrapper>
        </HomeLoginContainer>
      </>
    );
  };
  
  export default HomeLogin;
