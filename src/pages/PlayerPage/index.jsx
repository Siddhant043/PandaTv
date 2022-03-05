import React from "react";
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

          <PlayerControls video={video} />
        </VideoContainer>
      </PlayerPageContainer>
    </>
  );
};

export default PlayerPage;
