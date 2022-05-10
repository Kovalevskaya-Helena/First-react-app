import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE_LOGIN = { isAuth: false };

export const { actions, reducer } = createSlice({
  name: "login",
  initialState: INITIAL_STATE_LOGIN,
  reducers: {
    login: (state, action) => {
      return { isAuth: true };
    },
    logout: (state, action) => {
      return { isAuth: false };
    },
  },
});
