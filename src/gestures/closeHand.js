import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const closeHand = new GestureDescription("close_hand");


for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    closeHand.addCurl(finger, FingerCurl.FullCurl, 1.0)
    closeHand.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}