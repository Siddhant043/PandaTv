import React from "react";
import Button from "../../components/Button";
import { CardContainer, CardImage, CardWrapper } from "./styles";

const Card = ({ id, imgSrc, name }) => {
  const url = `/home/${id}`;

  return (
    <CardWrapper>
      <CardContainer>
        <CardImage src={imgSrc} alt={name} />
      </CardContainer>
      <Button link={url}>Play</Button>
    </CardWrapper>
  );
};

export default Card;
