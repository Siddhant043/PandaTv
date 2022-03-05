import styled from "styled-components";

export const PlayerPageContainer = styled.div`
  width: 100%;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoContainer = styled.div`
  width: 70%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ControlsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const GridItem = styled.div`
  > span {
    font-size: 24px;
    color: #fff;
  }
`;
