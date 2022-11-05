import React from "react";
import styled from "styled-components";
import { AsideBar } from "../components";

const Dashboard = () => {
  return (
    <Container>
      <AsideBar />
      <ContentBox>
        <Header>icons ... 원티드님</Header>
        <MainSection>
          <TitleBox>
            <Title>대시보드</Title>
            <DateBox>2022년 11월 5일</DateBox>
          </TitleBox>
          <MainBoard>
            <BoardTitle>통합 광고 현황</BoardTitle>
            <Board>차트</Board>
          </MainBoard>
        </MainSection>
      </ContentBox>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const ContentBox = styled.section`
  flex-grow: 1;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Header = styled.div``;

const MainSection = styled.section``;

const TitleBox = styled.div``;

const Title = styled.h1``;

const DateBox = styled.div``;

const MainBoard = styled.div``;

const BoardTitle = styled.h2``;

const Board = styled.div``;

// const  = styled.div``;
