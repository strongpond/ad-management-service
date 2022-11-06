import React from "react";
import styled from "styled-components";

const AdManagement = () => {
  return (
    <Container>
      <TitleBox>
        <Title>광고관리</Title>
      </TitleBox>
      <MainBoard>
        <Board>차트</Board>
      </MainBoard>
    </Container>
  );
};

export default AdManagement;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.lgTitle};
  font-weight: 900;
`;

const MainBoard = styled.div``;

const Board = styled.div`
  padding: 40px;
  height: 654px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;
