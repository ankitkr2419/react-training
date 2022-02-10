import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isLoggedIn: false,
  },
  reducers: {
    logginUser(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logutUser(state, action) {
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});
