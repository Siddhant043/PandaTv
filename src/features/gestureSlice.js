import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  play: 'close_hand',
  pause: 'open_hand',
  rewind: 'point_left',
  fastForward: 'point_right',
  mute:'thumbs_up'
};

const gestureSlice = createSlice({
  name: "gesture",
  initialState,
  reducers: {
    changeGesture: (state, action) => {
      const { gesture, func} = action.payload;
      if(func==='play'){
        state.play = gesture
      }
      if(func==='pause'){
        state.pause = gesture
      }
      if(func==='rewind'){
        state.rewind = gesture
      }
      if(func==='fastForward'){
        state.fastForward = gesture
      }
      if(func==='mute'){
        state.mute = gesture
      }
    },
    defaultGestures: (state) => {
      state = {
        play: 'open_hand',
        pause: 'close_hand',
        rewind: 'point_left',
        fastForward: 'point_right',
        mute:''
      };
    },
  },
});

export const { changeGesture, defaultGestures } = gestureSlice.actions;
export const selectGestureState = (state) => state.gesture;
export default gestureSlice.reducer;