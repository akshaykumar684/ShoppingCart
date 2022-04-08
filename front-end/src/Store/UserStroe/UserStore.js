import { createSlice } from "@reduxjs/toolkit";

const initalUserStore = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "useSlice",
  initialState: initalUserStore,
  reducers: {
    loginAndAuthenticateUser(state) {
      state.isLoggedIn = true;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducers = userSlice.reducer;
