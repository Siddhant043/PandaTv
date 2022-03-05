import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import videoSlice from "../features/videoSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    video: videoSlice,
  },
});
