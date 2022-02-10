import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "users",
  initialState: {
    blogs: [],
  },
  reducers: {
    addBlogsToList(state, action) {
      state.blogs = action.payload.blogs;
      console.log(state);
    },
  },
});

export const blogActions = blogSlice.actions;

export default blogSlice;
