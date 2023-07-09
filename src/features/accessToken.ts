import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface AccessTokenState {
  accessToken: string
}

const initialState: AccessTokenState = { accessToken: "" }

export const accessTokenSLice = createSlice({
  name: "accessToken",
  initialState: { value: initialState },
  reducers: {
    setAccessToken: (state, action: PayloadAction<AccessTokenState>) => {
      state.value = action.payload;
    },
  },
});

export const { setAccessToken } = accessTokenSLice.actions;
export const selectAccessToken = (state: RootState) => state.accessToken.value
export default accessTokenSLice.reducer;
