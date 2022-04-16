import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// describe thumbs up gesture 👍
const thumbsUp = new GestureDescription('thumbs_up');

// thumb:
// - curl: none (must)
// - direction vertical up (best)
// - direction diagonal up left / right (acceptable)
thumbsUp.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsUp.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
thumbsUp.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
thumbsUp.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

// all other fingers:
// - curled (best)
// - half curled (acceptable)
// - pointing down is NOT acceptable
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsUp.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thumbsUp.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// require the index finger to be somewhat left or right pointing
// but NOT down and NOT fully up
// thumbsUp.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
// thumbsUp.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
// thumbsUp.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
// thumbsUp.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

export default thumbsUp;