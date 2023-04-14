import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../services/interfaces/user";

const initialState: IUser = {
  name: "",
  email: "",
  phone: "",
  username: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<IUser>): IUser => ({
      ...state,
      ...action.payload,
      isLoggedIn: true,
    }),
    setUserDetails: (state, action: PayloadAction<IUser>): IUser => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { loginUser, setUserDetails } = userSlice.actions;
export default userSlice.reducer;
