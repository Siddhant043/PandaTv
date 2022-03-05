import styled from "styled-components";

export const PlayerPageContainer = styled.div`
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

export const ControlContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

export const VideoHeading = styled.div`
  padding: 16px;
  font-size: 24px;
  color: #fff;
`;

export const MiddleControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BottomControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`;

export const BottomGridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

export const VideoTime = styled.span`
  color: #fff;
  margin-left: 30px;
  cursor: pointer;
`;

export const LeftControls = styled.div`
  display: flex;
  align-items: center;
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
`;

export const SpeedControlsWrapper = styled.span`
  font-weight: 800;
  color: grey !important;
  cursor: pointer;
  &:hover {
    color: #fff !important;
  }
`;
