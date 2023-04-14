import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUiOverlay } from "../../services/interfaces/uiOverlays";

const initialState: IUiOverlay = {
  loaderVisible: false,
};

export const userSlice = createSlice({
  name: "uiOverlays",
  initialState: initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loaderVisible: action.payload,
    }),
  },
});

export const { setLoader } = userSlice.actions;
export default userSlice.reducer;
