import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import Navbar from "../../components/Navbar";
import { PlayerPageContainer, VideoContainer } from "./styles";

import { useParams } from "react-router-dom";
import { videoData } from "../../utils/data";
import PlayerControls from "./PlayerControls";
import screenfull from "screenfull";
import { Grid, Typography } from "@mui/material";
import Explore from "../Explore";
import Button from "../../components/Button";

// Time handling
const format = (seconds) => {
  if (isNaN(seconds)) {
    return "00:00";
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}`;
  }
  return `${mm}:${ss}`;
};

const PlayerPage = () => {
  const { videoId } = useParams();
  const [showControls, setShowControls] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const video = videoData.filter((video) => video.id === Number(videoId))[0];

  // video controls
  const [state, setState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  });
  const { playing, muted, volume, playbackRate, played } = state;
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  // controls handle function
  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };
  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };
  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };
  const handleMute = () => {
    setState({ ...state, muted: !state.muted });
  };
  const handleVolumeChange = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handleVolumeSeekUp = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };
  const handlePlaybackRateChange = (rate) => {
    setState({ ...state, playbackRate: rate });
  };
  const handleToggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current);
  };
  const handleProgress = (changeState) => {
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  //video slider functions
  const handleSeekChange = (e, newValue) => {
    setState({ ...state, played: parseFloat(newValue / 100) });
  };
  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };
  const handleSeekMouseUp = (e, newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100);
  };

  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";

  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";
  const elapsedTime = format(currentTime);
  const totalDuration = format(duration);

  return (
    <>
      <Navbar />
      <PlayerPageContainer>
      {
            showComponent && (
              <Explore fromPlayerPage handleFastForward={handleFastForward} handleRewind={handleRewind} state={state} setState={setState}/>
            )
      }
        <VideoContainer ref={playerContainerRef} onMouseOver={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
          <ReactPlayer
            ref={playerRef}
            width={"100%"}
            height={"100%"}
            url={video.videoSrc}
            muted={muted}
            playing={playing}
            volume={volume}
            playbackRate={playbackRate}
            onProgress={handleProgress}
          />
          {showControls && (
            <PlayerControls
            video={video}
            onPlayPause={handlePlayPause}
            playing={playing}
            onRewind={handleRewind}
            onFastForward={handleFastForward}
            muted={muted}
            onMute={handleMute}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekUp={handleVolumeSeekUp}
            volume={volume}
            playbackRate={playbackRate}
            onPlaybackRateChange={handlePlaybackRateChange}
            onToggleFullScreen={handleToggleFullScreen}
            played={played}
            onSeek={handleSeekChange}
            onSeekMouseDown={handleSeekMouseDown}
            onSeekMouseUp={handleSeekMouseUp}
            elapsedTime={elapsedTime}
            totalDuration={totalDuration}
          />
          )}
        </VideoContainer>
      </PlayerPageContainer>
      <Grid container mt={5} width={'100%'} direction={'column'} justifyContent='center'>
          <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Button handleClick={() => setShowComponent(!showComponent)}>
            {showComponent ? 'Stop Hand Gesture Recognition' : 'Start Hand Gesture Recognition'}
          </Button>
          </Grid>
      </Grid>
    </>
  );
};

export default PlayerPage;
