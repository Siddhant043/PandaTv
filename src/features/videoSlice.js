import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setCurrentVideo: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const { setCurrentVideo } = videoSlice.actions;
export const { selectVideo } = (state) => state.video;

export default videoSlice.reducer;
