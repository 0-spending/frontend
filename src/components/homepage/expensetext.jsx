// 오늘소비 글 볼 수 있는 부분 
import React from 'react';
import styled from 'styled-components';

const ExpenseContainer = styled.div`
  width: 467px;
  min-height: 319px;
  max-height: 620px;
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
    margin-bottom: 49px;
    padding-bottom:42px;
`

const Title = styled.p` // '오늘 소비'
  font-size: 20px;
  font-weight: bold;
  color: #8c8c8c;
  margin:0;
`;

const ExpenseTitle = styled.p` // 글 제목
  font-size: 25px;
  font-weight: bold;
  color: #262626;
  margin:0;
`;

const AuthorDate = styled.p` // 작성자 / 날짜
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.grayscale[900]} ;
  margin:0;
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
  
`;

const ExpenseText = () => {
  return (
    <ExpenseContainer>
    <ExpenseContent>
      <Title>오늘 소비</Title>
      <ExpenseTitle>10/06 소비 기록</ExpenseTitle>
      <AuthorDate>고다윤 | 24.10.06</AuthorDate>
    </ExpenseContent>
      <Content>[글 본문]
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.
      </Content>
    </ExpenseContainer>
  );
};

export default ExpenseText;
