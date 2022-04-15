import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const openPalmGesture = new GestureDescription("open_palm");

for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    openPalmGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
    openPalmGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);
}