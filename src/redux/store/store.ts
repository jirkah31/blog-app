import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "../features/darkTheme";
import accessTokenReducer from "../features/accessToken";

const store = configureStore({
  reducer: {
    isDarkMode: darkThemeReducer,
    accessToken: accessTokenReducer,
  }
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
