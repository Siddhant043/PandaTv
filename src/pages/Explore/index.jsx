import React, {useState, useRef} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from 'react-webcam';
import { MainContainer, StyledCanvas, StyledWebcam } from './styles';
import { drawHands } from '../../utils/handData';


const Explore = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  const runHandpose = async () => {
        const net = await handpose.load();
        console.log("handpose model loaded");
        setInterval(() => {
            detect(net);  
        }, 100)
  }

  const detect = async (net) => {
    if(typeof webcamRef.current !== 'undefined' && webcamRef.current !== null && webcamRef.current.video.readyState === 4){
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make detections 
      const hand = await net.estimateHands(video);
      console.log(hand);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHands(hand, ctx);
    }
  }

  runHandpose();


  return (
    <MainContainer>
        <StyledWebcam ref={webcamRef} />
        <StyledCanvas ref={canvasRef}/>
    </MainContainer>
  )
}

export default Explore