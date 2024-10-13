import React, { useState } from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  width: 600px;
  height: 750px;
  margin: 0;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  padding-right: 45px;
  padding-left: 45px;
  padding-bottom:45px;
  margin-left: 45px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column; 
  justify-content: space-between; 
`;

const Header = styled.div` // year과 month 감싸는 부분
  text-align: center;
  margin-top: 50px;
`;

const YearDisplay = styled.p` // year 글씨
  font-size: 32px;
  font-weight: bold;
  color:  ${(props) => props.theme.colors.primary[700]} ;
  margin: 0;
  margin-bottom: 64px;
`;

const MonthDisplay = styled.div` // month 화살표, 월을 나타내는 한 줄
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0;
`;

const ArrowButton = styled.button` // 옆으로 넘기는 화살표 버튼
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary[700]} ;
  margin-right: 20px;
  margin-left: 20px;
`;

const MonthName = styled.p` // 달 이름 출력
  font-size: 24px;
  font-weight: bold;
  margin:0;
  margin: 0 10px;
  color: #333;
`;

const DaysOfWeek = styled.div` // 요일
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: normal;
  margin:0;
  color:  ${(props) => props.theme.colors.primary[500]} ;
  font-size: 15px;
`;

const DaysGrid = styled.div` // 날짜 놓는 칸
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  width:100%;
  height:auto;
  margin:0;
`;

const Day = styled.div` 
  width: 100%;
  height: 80px;
  position: relative;
  background-color: transparent; /* 기본적으로 투명 */
  // ${props => props.hasData && `background-color: #f0f0f0;`}; /* 데이터가 있을 때만 배경 적용 */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: normal;
  color: #595959;
  margin:0;
`;

const DataTag = styled.div` // 금액 데이터가 있으면 초록색으로 표시
  background-color: #b0e4dd;
  color: #595959;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  position: absolute;
  top:25px; // day 숫자 바로 아래에 배치할 수 있도록 함. 
  margin-top: 30px;
`;

const Calendar = ({ expenses }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // 주어진 월의 총 일수를 구하는 함수
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // 주어진 월의 첫 번째 날의 요일을 구하는 함수
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; // 요일

  // 빈 칸 추가해서 요일 맞춤
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => (
    <div key={`empty-${i}`}></div>
  ));

  return (
    <CalendarContainer>
      <Header>
        <YearDisplay>{currentYear}</YearDisplay>
        <MonthDisplay>
          <ArrowButton onClick={handlePrevMonth}>&lt;</ArrowButton>
          <MonthName>{`${currentMonth + 1}월`}</MonthName>
          <ArrowButton onClick={handleNextMonth}>&gt;</ArrowButton>
        </MonthDisplay>
      </Header>

      {/* 요일 고정 */}
      <DaysOfWeek>
        {daysOfWeek.map(day => (
          <div key={day}>{day}</div>
        ))}
      </DaysOfWeek>

      {/* 달력 날짜 */}
      <DaysGrid>
        {/* 빈 칸 먼저 채우기 */}
        {emptyDays}
        {/* 날짜 채우기 */}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
  const hasData = expenses.some(expense => expense.date === `${currentYear}-${currentMonth + 1}-${day}`);
  return (
    <Day key={day} hasData={hasData}>
      <div>{day}</div>
      {hasData && (
        <DataTag>
          {expenses.find(exp => exp.date === `${currentYear}-${currentMonth + 1}-${day}`).name} {expenses.find(exp => exp.date === `${currentYear}-${currentMonth + 1}-${day}`).amount.toLocaleString()}원
        </DataTag>
      )}
    </Day>
  );
})}
      </DaysGrid>
    </CalendarContainer>
  );
};

export default Calendar;
