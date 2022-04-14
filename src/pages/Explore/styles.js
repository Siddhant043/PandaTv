import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Webcam from 'react-webcam';

export const MainContainer = styled(Grid)``;


export const StyledWebcam = styled(Webcam)`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    text-align: center;
    z-index: 9;
    width: 640px;
    height: 480px;
`;

export const StyledCanvas = styled.canvas`
     position: absolute;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    text-align: center;
    z-index: 9;
    width: 640px;
    height: 480px;
`;