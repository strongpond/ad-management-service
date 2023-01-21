import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { adIdentifyAtom } from "../../atoms";
import { useDetectClose } from "../../hooks";
import { AdDropDownList } from "./AdDropDownList";

const AdDropDown = () => {
  const dropDownRef = useRef();
  const adIdentify = useRecoilValue(adIdentifyAtom);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const adList = ["전체광고", "진행중", "마감"];

  return (
    <DropBox ref={dropDownRef} onClick={() => setIsOpen(!isOpen)}>
      <DropHeader>
        <SelectedInput>{adIdentify}</SelectedInput>
        <IoIosArrowDown />
      </DropHeader>
      {isOpen && (
        <DropList>
          {adList.map((value, index) => (
            <AdDropDownList key={index} value={value} setIsOpen={setIsOpen} isOpen={isOpen} />
          ))}
        </DropList>
      )}
    </DropBox>
  );
};

export default AdDropDown;

const DropBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 120px;
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
  min-width: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 500;
`;

const DropList = styled.ul`
  display: block;
  position: absolute;
  width: 102%;
  margin-top: 25px;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-top: none;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: height 0.3s ease;
`;
