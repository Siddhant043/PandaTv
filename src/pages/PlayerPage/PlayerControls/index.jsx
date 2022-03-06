import React from "react";
import {
  BottomControlsContainer,
  BottomGridContainer,
  ControlContainer,
  LeftControls,
  MiddleControlsContainer,
  PopoverValueContainer,
  RightControls,
  SpeedControlsWrapper,
  VideoHeading,
  VideoTime,
  VolumeWrapper,
} from "../styles";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import { styled as withStyled } from "@mui/material/styles";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FullScreenIcon from "@mui/icons-material/Fullscreen";
import Popover from "@mui/material/Popover";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { Tooltip } from "@mui/material";

// styled-components
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

// styled-components end

const PlayerControls = ({
  video,
  onPlayPause,
  playing,
  onRewind,
  onFastForward,
}) => {
  // Popover code
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  //Popver code ends here

  return (
    <ControlContainer>
      {/*top controls*/}
      <VideoHeading>{video.name}</VideoHeading>
      {/*top controls */}
      {/*middle controls */}
      <MiddleControlsContainer>
        <IconButtonWrapper>
          <FastRewindIcon onClick={onRewind} style={{ fontSize: "50px" }} />
        </IconButtonWrapper>
        <IconButtonWrapper>
          {!playing ? (
            <PlayArrowIcon
              onClick={onPlayPause}
              style={{ fontSize: "100px" }}
            />
          ) : (
            <PauseIcon onClick={onPlayPause} style={{ fontSize: "100px" }} />
          )}
        </IconButtonWrapper>
        <IconButtonWrapper>
          <FastForwardIcon
            onClick={onFastForward}
            style={{ fontSize: "50px" }}
          />
        </IconButtonWrapper>
      </MiddleControlsContainer>
      {/*middle controls */}
      {/*bottom controls */}
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
              {!playing ? (
                <PlayArrowIcon
                  onClick={onPlayPause}
                  style={{ fontSize: "30px" }}
                />
              ) : (
                <PauseIcon onClick={onPlayPause} style={{ fontSize: "30px" }} />
              )}
            </BottomIcons>
            <VolumeWrapper>
              <BottomIcons>
                <VolumeUpIcon style={{ fontSize: "30px" }} />
              </BottomIcons>
              <VolumeSlider min={0} max={100} defaultValue={100} width={100} />
            </VolumeWrapper>
            <VideoTime>05:05</VideoTime>
          </LeftControls>
          <RightControls>
            <SpeedControlsWrapper onClick={handlePopover}>
              1X
            </SpeedControlsWrapper>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <PopoverValueContainer>
                {[0.5, 1, 1.5, 2].map((rate) => (
                  <span key={rate}>{rate}</span>
                ))}
              </PopoverValueContainer>
            </Popover>
            <BottomIcons>
              <FullScreenIcon style={{ fontSize: "30px" }} />
            </BottomIcons>
          </RightControls>
        </BottomGridContainer>
      </BottomControlsContainer>
      {/*bottom controls */}
    </ControlContainer>
  );
};

export default PlayerControls;
