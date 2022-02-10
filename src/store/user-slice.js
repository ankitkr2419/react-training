import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUsersToList(state, action) {
      state.users = action.payload.users;
      console.log(state);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
