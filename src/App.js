import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { AsideBar, Header } from "./components";
import { Dashboard, AdManagement } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <AsideBar />
        <MainSection>
          <Header />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/ad" element={<AdManagement />} />
          </Routes>
        </MainSection>
      </Container>
    </BrowserRouter>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const MainSection = styled.section`
  flex-grow: 1;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.grey};
`;
