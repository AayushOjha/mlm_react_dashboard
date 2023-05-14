import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../services/interfaces/user.interface";

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
    storeUser: (state, action: PayloadAction<IUser>): IUser => ({
      ...state,
      username: action.payload.username,
      name: action.payload.name,
      email: action.payload.email,
      phone: action.payload.phone,
      isLoggedIn: true,
      isAdmin: action.payload.isAdmin,
    }),
  },
});

export const { storeUser } = userSlice.actions;
export default userSlice.reducer;
