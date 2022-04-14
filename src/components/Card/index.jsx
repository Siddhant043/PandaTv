import { Grid } from "@mui/material";
import React from "react";
import Button from "../../components/Button";
import { CardContainer, CardImage, CardWrapper } from "./styles";

const Card = ({ id, imgSrc, name }) => {
  const url = `/home/${id}`;

  return (
    <CardWrapper container direction={'column'} xs={3} justifyContent=''>
      <CardContainer item>
        <CardImage  src={imgSrc} alt={name} />
      </CardContainer>
      <Grid item container justifyContent={'center'}  mt={2}>
      <Button link={url}>Play</Button>
      </Grid>
    </CardWrapper>
  );
};

export default Card;
