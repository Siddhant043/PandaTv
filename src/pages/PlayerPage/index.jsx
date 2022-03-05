import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../../components/Navbar";
import {
  ControlsContainer,
  GridContainer,
  GridItem,
  PlayerPageContainer,
  VideoContainer,
} from "./styles";
import IconButton from "@mui/material/IconButton";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import styled from "styled-components";
import { styled as withStyled } from "@mui/material/styles";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { Tooltip } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useParams } from "react-router-dom";
import { videoData } from "../../utils/data";

const IconButtonWrapper = styled(IconButton)`
  color: "#fff";
  font-size: 50px;
  transform: scale(0.9);
  &:hover {
    color: #fff;
    transform: scale(1);
  }
`;

const BottomIcons = styled(IconButton)`
  color: #999;
  &:hover {
    color: #fff;
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

const VolumeSlider = styled(Slider)`
  width: 100px;
`;

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
  console.log(video);

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
            playing={true}
          />
          <ControlsContainer>
            {/*top controls*/}
            <GridContainer style={{ justifyContent: "space-between" }}>
              <GridItem>
                <span>{video.name}</span>
              </GridItem>
            </GridContainer>
            {/*middle controls*/}
            <GridContainer style={{ justifyContent: "center" }}>
              <IconButtonWrapper aria-label="required">
                <FastRewindIcon fontSize="inherit" />
              </IconButtonWrapper>
              <IconButtonWrapper aria-label="required">
                <PlayArrowIcon fontSize="inherit" />
              </IconButtonWrapper>
              <IconButtonWrapper aria-label="required">
                <FastForwardIcon fontSize="inherit" />
              </IconButtonWrapper>
            </GridContainer>

            {/*bottom controls */}
            <GridContainer
              style={{
                justifyContent: "space-between",
                padding: "16",
              }}
            ></GridContainer>
            <GridItem>
              <PrettoSlider
                min={0}
                max={100}
                defaultValue={20}
                ValueLabelComponent={ValueLabelComponent}
              />
            </GridItem>
            <GridItem>
              <GridContainer>
                <BottomIcons>
                  <PlayArrowIcon fontSize="large" />
                </BottomIcons>
                <BottomIcons>
                  <VolumeUpIcon fontSize="large" />
                </BottomIcons>
                <VolumeSlider min={0} max={100} defaultValue={100} />
              </GridContainer>
            </GridItem>
          </ControlsContainer>
        </VideoContainer>
      </PlayerPageContainer>
    </>
  );
};

export default PlayerPage;
