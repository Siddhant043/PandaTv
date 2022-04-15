import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const yoGesture = new GestureDescription("yo");

//Thumb
yoGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
yoGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
yoGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);


//Index
yoGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
yoGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);


//Pinky
yoGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
yoGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for(let finger of [Finger.Middle, Finger.Ring]){
    yoGesture.addCurl(finger, FingerCurl.FullCurl, 0.75)
    yoGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
