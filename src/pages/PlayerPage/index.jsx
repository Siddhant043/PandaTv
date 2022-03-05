import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../../components/Navbar";
import {
  BottomControlsContainer,
  BottomGridContainer,
  ControlContainer,
  GridContainer,
  LeftControls,
  MiddleControlsContainer,
  PlayerPageContainer,
  RightControls,
  SpeedControlsWrapper,
  VideoContainer,
  VideoHeading,
  VideoTime,
  VolumeWrapper,
} from "./styles";
import IconButton from "@mui/material/IconButton";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FullScreenIcon from "@mui/icons-material/Fullscreen";
import styled from "styled-components";
import { styled as withStyled } from "@mui/material/styles";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { Tooltip } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useParams } from "react-router-dom";
import { videoData } from "../../utils/data";

const IconButtonWrapper = styled(IconButton)`
  color: "#fff";
  transform: scale(0.9);
  &:hover {
    color: #fff;
    transform: scale(1);
  }
`;

const BottomIcons = styled(IconButton)`
  color: grey !important;
  &:hover {
    color: #fff !important;
  }
`;

const PrettoSlider = withStyled(Slider)({
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const VolumeSlider = styled(Slider)``;

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PlayerPage = () => {
  const { videoId } = useParams();
  console.log(videoId);
  const video = videoData.filter((video) => video.id === Number(videoId))[0];

  return (
    <>
      <Navbar />
      <PlayerPageContainer>
        <VideoContainer>
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={video.videoSrc}
            muted={false}
            playing={false}
          />

          <ControlContainer>
            {/*top controls*/}
            <VideoHeading>{video.name}</VideoHeading>
            <MiddleControlsContainer>
              <IconButtonWrapper>
                <FastRewindIcon style={{ fontSize: "50px" }} />
              </IconButtonWrapper>
              <IconButtonWrapper>
                <PlayArrowIcon style={{ fontSize: "100px" }} />
              </IconButtonWrapper>
              <IconButtonWrapper>
                <FastForwardIcon style={{ fontSize: "50px" }} />
              </IconButtonWrapper>
            </MiddleControlsContainer>
            <BottomControlsContainer>
              <PrettoSlider
                min={0}
                max={100}
                defaultValue={20}
                ValueLabelComponent={ValueLabelComponent}
              />

              <BottomGridContainer>
                <LeftControls>
                  <BottomIcons>
                    <PlayArrowIcon style={{ fontSize: "30px" }} />
                  </BottomIcons>
                  <VolumeWrapper>
                    <BottomIcons>
                      <VolumeUpIcon style={{ fontSize: "30px" }} />
                    </BottomIcons>
                    <VolumeSlider
                      min={0}
                      max={100}
                      defaultValue={100}
                      width={100}
                    />
                  </VolumeWrapper>
                  <VideoTime>05:05</VideoTime>
                </LeftControls>
                <RightControls>
                  <SpeedControlsWrapper>1X</SpeedControlsWrapper>
                  <BottomIcons>
                    <FullScreenIcon style={{ fontSize: "30px" }} />
                  </BottomIcons>
                </RightControls>
              </BottomGridContainer>
            </BottomControlsContainer>
          </ControlContainer>
        </VideoContainer>
      </PlayerPageContainer>
    </>
  );
};

export default PlayerPage;
