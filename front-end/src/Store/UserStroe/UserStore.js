import { createSlice } from "@reduxjs/toolkit";

const initalUserStore = {
  isLoggedIn: false,
  registeredUsers: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initalUserStore,
  reducers: {
    loginAndAuthenticateUser(state) {
      state.isLoggedIn = true;
    },
    registerNewUser(state, payloadData) {
      const { payload } = payloadData;
      state.registeredUsers.push(payload);
    },
  },
});

export const userActions = userSlice.actions;
export const userReducers = userSlice.reducer;
