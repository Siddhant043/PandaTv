import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import Navbar from "../../components/Navbar";
import { PlayerPageContainer, VideoContainer } from "./styles";

import { useParams } from "react-router-dom";
import { videoData } from "../../utils/data";
import PlayerControls from "./PlayerControls";

const PlayerPage = () => {
  const { videoId } = useParams();
  console.log(videoId);
  const video = videoData.filter((video) => video.id === Number(videoId))[0];

  // video controls
  const [state, setState] = useState({
    playing: true,
  });
  const { playing } = state;
  const playerRef = useRef(null);
  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };
  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };
  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  return (
    <>
      <Navbar />
      <PlayerPageContainer>
        <VideoContainer>
          <ReactPlayer
            ref={playerRef}
            width={"100%"}
            height={"100%"}
            url={video.videoSrc}
            muted={false}
            playing={playing}
          />

          <PlayerControls
            video={video}
            onPlayPause={handlePlayPause}
            playing={playing}
            onRewind={handleRewind}
            onFastForward={handleFastForward}
          />
        </VideoContainer>
      </PlayerPageContainer>
    </>
  );
};

export default PlayerPage;
