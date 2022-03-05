import React from "react";
import Card from "../../../components/Card";
import { CardsSection, HeadingContainer, VideoContainer } from "./style";
import { videoData } from "../../../utils/data";

const Videos = () => {
  return (
    <VideoContainer>
      <HeadingContainer>Videos</HeadingContainer>
      <CardsSection>
        {videoData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            imgSrc={item.imgSrc}
            videoSrc={item.videoSrc}
            name={item.name}
          />
        ))}
      </CardsSection>
    </VideoContainer>
  );
};

export default Videos;
