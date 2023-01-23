import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";
import styled from "styled-components";

import { useDetectClose } from "../../hooks";
import { FilterDropDownList } from "./FilterDropDownList";

const FilterDropDown = ({ cardTitleList, filteredTitle, setFilteredTitle, iconColor }) => {
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  return (
    <DropBox ref={dropDownRef} onClick={() => setIsOpen(!isOpen)}>
      <DropHeader>
        <BsCircleFill size="12" color={iconColor} />
        <SelectedInput>{filteredTitle}</SelectedInput>
        <IoIosArrowDown />
      </DropHeader>
      {isOpen && (
        <DropList>
          {cardTitleList.map((value, index) => (
            <FilterDropDownList
              key={index}
              value={value}
              setFilteredTitle={setFilteredTitle}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          ))}
        </DropList>
      )}
    </DropBox>
  );
};

export default FilterDropDown;

const DropBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 10px;
  min-width: 120px;
  height: 40px;
  border: 0.5px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 10px;
  cursor: pointer;
`;

const DropHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0 10px;
`;

const SelectedInput = styled.p`
  margin: 0 15px;
  min-width: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 500;
`;

const DropList = styled.ul`
  display: block;
  position: absolute;
  width: 100%;
  margin-top: 30px;
  padding-top: 10px;
  border: 0.5px solid ${({ theme }) => theme.colors.borderGrey};
  border-top: none;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: height 0.3s ease;
`;
