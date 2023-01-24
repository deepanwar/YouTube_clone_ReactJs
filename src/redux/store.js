import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { youtubeApi } from "./services/youtubeApi";
import videoReducer from "./video/videoSlice";
import utilsReducer from "./utils/utilsSlice";

export const store = configureStore({
  reducer: {
    video: videoReducer,
    utils: utilsReducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApi.middleware),
});

// import { configureStore } from "@reduxjs/toolkit";

// import playerReducer from "./features/playerSlice";
// import { shazamCoreApi } from "./services/shazamCore";

// export const store = configureStore({
//   reducer: {
//     player: playerReducer,
//     [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(shazamCoreApi.middleware),
// });
