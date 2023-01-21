import { useRef, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

import { useDetectClose } from "../hooks";
import { AdCard, AdDropDown } from "../components";

const AdManagement = () => {
  const dropDownRef = useRef();
  const [adIdentify, setAdIdentify] = useState("전체광고");
  const [adData, setAdData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const adList = ["전체광고", "진행중", "마감"];

  const fetchData = () => {
    return fetch("data/ad-list-data-set.json")
      .then(response => response.json())
      .then(data => data.ads);
  };

  useEffect(() => {
    fetchData().then(data => {
      setAdData(data);
      setFilteredData(data);
    });
  }, []);

  return (
    <Container>
      <TitleBox>
        <Title>광고관리</Title>
      </TitleBox>
      <MainBoard>
        <Board>
          <BoardHeader>
            <DropBox ref={dropDownRef} onClick={() => setIsOpen(!isOpen)}>
              <DropHeader>
                <SelectedInput>{adIdentify}</SelectedInput>
                <IoIosArrowDown />
              </DropHeader>
              {isOpen && (
                <DropList>
                  {adList.map((value, index) => (
                    <AdDropDown
                      key={index}
                      value={value}
                      adData={adData}
                      setIsOpen={setIsOpen}
                      setAdIdentify={setAdIdentify}
                      setFilteredData={setFilteredData}
                      isOpen={isOpen}
                    />
                  ))}
                </DropList>
              )}
            </DropBox>
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

const DropBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 10px;
  cursor: pointer;
`;

const DropHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const SelectedInput = styled.p`
  margin-right: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 500;
`;

const DropList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
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
