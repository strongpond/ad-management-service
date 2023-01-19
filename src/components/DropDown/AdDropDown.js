import styled from "styled-components";

const AdDropDown = ({ value, setAdIdentify, setIsOpen, isOpen }) => {
  const ValueClick = () => {
    setAdIdentify(value);
    setIsOpen(!isOpen);
  };
  return <AdMenu onClick={ValueClick}>{value}</AdMenu>;
};

export default AdDropDown;

const AdMenu = styled.li`
  justify-content: center;
  margin: 10px;
  cursor: pointer;
`;
