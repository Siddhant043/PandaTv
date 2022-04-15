import React, {useState, useRef, useEffect} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import Webcam from 'react-webcam';
import Navbar from "../../components/Navbar"
import { MainContainer, StyledCanvas, StyledWebcam } from './styles';
import { drawHands } from '../../utils/handData';

import {openPalmGesture} from "../../gestures/palm";
import { pointLeftGesture } from '../../gestures/pointLeft';


const Explore = ({fromPlayerPage, state, setState}) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [emoji, setEmoji] = useState(null);
  
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

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          openPalmGesture,
          pointLeftGesture
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        console.log(gesture.gestures)
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const score = gesture.gestures.map(
            (prediction) => prediction.score
          );
          const maxScore = score.indexOf(
            Math.max.apply(null, score)
          );
          // console.log(gesture.gestures[maxScore].name);
          setEmoji(gesture.gestures[maxScore].name);
          console.log(emoji);
        }
      }



      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHands(hand, ctx);
    }
  }
  runHandpose();


  // Run Media Functions
  useEffect(() => {
    if(state){
      if(emoji == 'open_palm'){
        setState({...state, playing:false})
      }
      if(emoji == 'point_left'){
        setState({...state, playing:true})
      }
    }
  }, [emoji])


  return (
    <>
    { !fromPlayerPage && <Navbar />}
    <MainContainer>
        <StyledWebcam ref={webcamRef} />
        <StyledCanvas ref={canvasRef}/>
    </MainContainer>
    </>
    
  )
}

export default Explore