import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "./api/studentApi";
import { teacherApi } from "./api/teacherApi";

const store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([studentApi.middleware, teacherApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
