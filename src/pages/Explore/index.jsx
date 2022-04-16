import React, {useState, useRef, useEffect} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import Webcam from 'react-webcam';
import Navbar from "../../components/Navbar"
import { MainContainer, StyledCanvas, StyledWebcam } from './styles';
import { drawHands } from '../../utils/handData';
import {closeHand} from '../../gestures/closeHand';
import {openPalmGesture} from "../../gestures/palm";
import { pointLeftGesture } from '../../gestures/pointLeft';
import {pointRightGesture} from '../../gestures/pointRight';
import { useSelector } from 'react-redux';
import { selectGestureState } from '../../features/gestureSlice';
import thumbsUp from '../../gestures/thumbsUp';
import thumbsDown from '../../gestures/thumbsDown';


const Explore = ({fromPlayerPage, state, setState, handleRewind, handleFastForward}) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [emoji, setEmoji] = useState(null);
  const gestureState = useSelector(selectGestureState);
  
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
          pointLeftGesture,
          pointRightGesture,
          closeHand,
          thumbsUp,
          thumbsDown
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        console.log(gesture)
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
      if(emoji == gestureState.play){
        setState({...state, playing:true})
      }
      if(emoji == gestureState.pause){
        setState({...state, playing:false})
      }
      if(emoji == gestureState.rewind){
        handleRewind()
      }
      if(emoji == gestureState.fastForward){
        handleFastForward()
      }
      if(emoji == gestureState.mute){
        if(state.muted === true){
          setState({...state, muted:false})
        }
        else{
          setState({...state, muted:true})
        }
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