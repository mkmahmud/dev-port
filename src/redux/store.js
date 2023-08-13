import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import { api } from "./features/api/createAPI";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
