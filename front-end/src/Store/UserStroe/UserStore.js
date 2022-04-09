import { createSlice } from "@reduxjs/toolkit";

const initalUserStore = {
  isLoggedIn: false,
  currentLoggedInUserName: null,
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
    loginAndAuthenticateUser(state, payloadData) {
      const { payload } = payloadData;
      state.isLoggedIn = true;
      state.currentLoggedInUserName = state.registeredUsers.find(
        (u) => u.email === payload
      ).firstName;
    },
    registerNewUser(state, payloadData) {
      const { payload } = payloadData;
      console.log(payload);
      state.registeredUsers.push(payload);
    },
    logOutUser(state) {
      state.isLoggedIn = false;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducers = userSlice.reducer;
