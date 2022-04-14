import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 50px;
  width: fit-content;
  background-color: #215bfc;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    background-color: #268bff;
  }
`;
