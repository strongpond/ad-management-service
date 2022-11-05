import React from "react";
import styled from "styled-components";
import { AsideBar, MainSection } from "../components";

const Dashboard = () => {
  return (
    <Container>
      <AsideBar />
      <MainSection />
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
