// 오늘소비 글 볼 수 있는 부분 
import React from 'react';
import styled from 'styled-components';

const ExpenseContainer = styled.div`
  width: 500px;
  min-height: 319px;
  max-height: 620px;
  margin-bottom: 25px;
  background-color: #fcfcfc;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto; /* 높이가 620px 이상일 때 스크롤 가능 */
`;

const ExpenseContent = styled.div`
    width: 250px;
    height: 124px;
    margin-top:37px;
    margin-left: 51px;
    margin-right: 166px;
    margin-bottom: 10px;
    padding-bottom:42px;
`

const Title = styled.p` // '오늘 소비'
  font-size: 20px;
  font-weight: bold;
  color: #8c8c8c;
  margin:0;
  text-align: left; /* 왼쪽 정렬 */
`;

const ExpenseTitle = styled.p` // 글 제목
  font-size: 25px;
  font-weight: bold;
  color: #262626;
  margin:0;
  text-align: left;
`;

const AuthorDate = styled.p` // 작성자 / 날짜
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.grayscale[900]} ;
  margin:0;
  text-align: left; /* 왼쪽 정렬 */
`;

const Content = styled.p` // 글 본문
  font-size: 20px;
  color: ${(props) => props.theme.colors.grayscale[800]};
  margin:0;
  margin-left: 51px;
  margin-bottom: 85px;
  margin-right: 32px;
  flex-grow: 1; /* 본문이 남은 공간을 차지하도록 설정 */
  overflow-y: auto; /* 본문이 길어지면 스크롤 가능 */
  text-align: left; /* 왼쪽 정렬 */
`;

const ExpenseText = () => {
  return (
    <ExpenseContainer>
    <ExpenseContent>
      <Title>오늘 소비</Title>
      <ExpenseTitle>10/11 소비 기록</ExpenseTitle>
      <AuthorDate>안성민 | 24.10.11</AuthorDate>
    </ExpenseContent>
      <Content>
        오늘은 점심은 학식에서 먹고, 카페는 커피쿠폰으로 먹었다. 단 게 너무 땡겼지만 캘린더에 찍힌 내 소비 내역을 보고 참았다!! <br></br>이렇게 오늘도 절약 성공함!
      </Content>
    </ExpenseContainer>
  );
};

export default ExpenseText;
