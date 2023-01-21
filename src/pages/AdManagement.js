import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

import { adDataAtom, filteredDataAtom } from "../atoms";
import { AdCard, AdDropDown } from "../components";

const AdManagement = () => {
  const setAdData = useSetRecoilState(adDataAtom);
  const [filteredData, setFilteredData] = useRecoilState(filteredDataAtom);

  const fetchData = () => {
    return fetch("data/ad-list-data-set.json")
      .then(response => response.json())
      .then(data => data.ads);
  };

  useEffect(() => {
    if (filteredData.length > 0) return;
    fetchData().then(data => {
      setAdData(data);
      setFilteredData(data);
    });
  }, [filteredData.length, setAdData, setFilteredData]);

  return (
    <Container>
      <TitleBox>
        <Title>광고관리</Title>
      </TitleBox>
      <MainBoard>
        <Board>
          <BoardHeader>
            <AdDropDown />
            <AddAdButton>광고 만들기</AddAdButton>
          </BoardHeader>
          <AdCardSection>
            {filteredData.map(data => (
              <AdCard key={data.id} data={data} />
            ))}
          </AdCardSection>
        </Board>
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
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddAdButton = styled.button`
  height: 45px;
  padding: 5px 20px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const AdCardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;
