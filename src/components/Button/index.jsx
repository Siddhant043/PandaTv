import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "./styles";

const Button = (props) => {
  const navigate = useNavigate();
  const handleClick = props.handleClick;

  if (props.link) {
    const handleNavigate = () => {
      navigate(props.link);
    };
    return (
      <ButtonContainer onClick={() => handleNavigate()}>
        {props.children}
      </ButtonContainer>
    );
  }
  return (
    <ButtonContainer onClick={() => handleClick()}>
      {props.children}
    </ButtonContainer>
  );
};

export default Button;
