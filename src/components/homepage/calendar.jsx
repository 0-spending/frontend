import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  width: 650px;
  height: 750px;
  margin: 0 auto;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0);
  padding: 20px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const YearDisplay = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2c7f57;
  text-align: center;
`;

const MonthDisplay = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #2c7f57;

  &:hover {
    color: #4CAF50;
  }
`;

const DaysOfWeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
  color: #666;
`;

const DayBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  padding: 10px 0;
  margin: 5px 0;
  height: 80px; /* 각 날짜 칸의 높이를 지정 */
  border-radius: 10px;
`;

const DayCell = styled.div`
  border-radius: 10px;
  background-color: ${(props) => (props.isToday ? '#2c7f57' : 'transparent')};
  color: ${(props) => (props.isToday ? '#fff' : '#333')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarHeader>
        <ArrowButton>&lt;</ArrowButton>
        <YearDisplay>2024</YearDisplay>
        <ArrowButton>&gt;</ArrowButton>
      </CalendarHeader>

      <MonthDisplay>November</MonthDisplay>

      <DaysOfWeekRow>
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </DaysOfWeekRow>

      <DayBox>
        {Array(30)
          .fill(0)
          .map((_, index) => (
            <DayCell key={index} isToday={index === 8}>
              {index + 1}
            </DayCell>
          ))}
      </DayBox>
    </CalendarContainer>
  );
};

export default Calendar;
