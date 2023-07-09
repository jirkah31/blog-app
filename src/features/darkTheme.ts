import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface DarkThemeState {
  isDarkMode: boolean
}

const initialState: DarkThemeState = { isDarkMode: false }

export const darkThemeSLice = createSlice({
  name: "isDarkMode",
  initialState: { value: initialState },
  reducers: {
    setDarkTheme: (state, action: PayloadAction<DarkThemeState>) => {
      state.value = action.payload;
    },
  },
});

export const { setDarkTheme } = darkThemeSLice.actions;
export const selectDarkTheme = (state: RootState) => state.isDarkMode.value
export default darkThemeSLice.reducer;
