import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

// Custom middleware function that you can define according to your needs
const customMiddleware = (store) => (next) => (action) => {
  // Your middleware logic here
  return next(action);
};

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => {
    // Create an array of middleware including any custom middleware you want to add
    const middleware = [
      // Add your custom middleware here
      customMiddleware,
      // Add any other middleware you want to include
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
    ];

    return middleware;
  },
});
