import styled from "styled-components";
import { convertStatus } from "../../utils";

const AdDropDownList = ({ value, adData, setAdIdentify, setIsOpen, isOpen, setFilteredData }) => {
  const ValueClick = () => {
    setAdIdentify(value);
    setIsOpen(!isOpen);
    setFilteredData(
      value === "전체광고" ? adData : adData.filter(e => convertStatus(e.status) === value)
    );
  };
  return <AdMenu onClick={ValueClick}>{value}</AdMenu>;
};

export default AdDropDownList;

const AdMenu = styled.li`
  padding: 10px 0 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
