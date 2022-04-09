import { createSlice } from "@reduxjs/toolkit";

const initalUserStore = {
  isLoggedIn: false,
  registeredUsers: [
    {
      email: "akshay@gmail.com",
      firstName: "Akshay",
      lastName: "Kumar",
      password: "12345",
    },
  ],
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
      console.log(payload);
      state.registeredUsers.push(payload);
    },
  },
});

export const userActions = userSlice.actions;
export const userReducers = userSlice.reducer;
