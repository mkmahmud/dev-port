import { configureStore } from "@reduxjs/toolkit";
import { api } from "./features/api/createAPI";
import projectSlice from "./features/project/projectSlice";

export const store = configureStore({
  reducer: {
    myProjects: projectSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
