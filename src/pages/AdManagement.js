import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

import { useDetectClose } from "../hooks";
import { AdDropDown } from "../components";

const AdManagement = () => {
  const dropDownRef = useRef();
  const [adIdentify, setAdIdentify] = useState("전체광고");
  const adList = ["전체광고", "진행중", "마감"];

  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  return (
    <Container>
      <TitleBox>
        <Title>광고관리</Title>
      </TitleBox>
      <MainBoard>
        <Board>
          <BoardHeader>
            <DropBox ref={dropDownRef}>
              <DropInput onClick={() => setIsOpen(!isOpen)} type="button" value={adIdentify} />
              {isOpen && (
                <DropList>
                  {adList.map((value, index) => (
                    <AdDropDown
                      key={index}
                      value={value}
                      setIsOpen={setIsOpen}
                      setAdIdentify={setAdIdentify}
                      isOpen={isOpen}
                    />
                  ))}
                </DropList>
              )}
              <IoIosArrowDown />
            </DropBox>
          </BoardHeader>
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
  height: 654px;
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
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 10px;
`;

const DropInput = styled.input`
  width: 100px;
`;

const DropList = styled.ul`
  display: flex;
  flex-direction: column;
`;
