import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const pointRightGesture = new GestureDescription("point_right");

//Thumb
pointRightGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
pointRightGesture.addDirection(Finger.Thumb, FingerDirection.VerticalTop, 0.25);

//Index
pointRightGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
pointRightGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.5);


for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]){
    pointRightGesture.addCurl(finger, FingerCurl.HalfCurl, 0.75)
    pointRightGesture.addCurl(finger, FingerCurl.FullCurl, 0.75)
}