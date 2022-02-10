import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import blogSlice from "./blog-slice";
import createSagaMiddleware from "redux-saga";

import userSlice from "./user-slice";
import rootSaga from "../sagas/rootsaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    blogs: blogSlice.reducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
