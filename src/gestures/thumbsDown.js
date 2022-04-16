import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// describe thumbs up gesture 👍
const thumbsDown = new GestureDescription('thumbs_down');

// thumb:
// - curl: none (must)
// - direction vertical up (best)
// - direction diagonal up left / right (acceptable)
thumbsDown.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsDown.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
thumbsDown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.9);
thumbsDown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.9);

// all other fingers:
// - curled (best)
// - half curled (acceptable)
// - pointing down is NOT acceptable
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsDown.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thumbsDown.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// require the index finger to be somewhat left or right pointing
// but NOT down and NOT fully up
// thumbsDown.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
// thumbsDown.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
// thumbsDown.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
// thumbsDown.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

export default thumbsDown;