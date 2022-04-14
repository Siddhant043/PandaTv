import { Grid } from "@mui/material";
import styled from "styled-components";

export const CardWrapper = styled(Grid)`
`;

export const CardContainer = styled(Grid)`
  height: 300px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
`;

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
