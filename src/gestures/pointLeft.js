import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const pointLeftGesture = new GestureDescription("point_left");

//Thumb
pointLeftGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
pointLeftGesture.addDirection(Finger.Thumb, FingerDirection.VerticalTop, 0.25);

//Index
pointLeftGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
pointLeftGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.5);


for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]){
    pointLeftGesture.addCurl(finger, FingerCurl.FullCurl, 0.75)
}