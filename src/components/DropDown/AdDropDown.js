import styled from "styled-components";
import { convertStatus } from "../../utils";

const AdDropDown = ({ value, adData, setAdIdentify, setIsOpen, isOpen, setFilteredData }) => {
  const ValueClick = () => {
    setAdIdentify(value);
    setIsOpen(!isOpen);
    setFilteredData(
      value === "전체광고" ? adData : adData.filter(e => convertStatus(e.status) === value)
    );
  };
  return <AdMenu onClick={ValueClick}>{value}</AdMenu>;
};

export default AdDropDown;

const AdMenu = styled.li`
  margin: 10px;
  cursor: pointer;
`;
