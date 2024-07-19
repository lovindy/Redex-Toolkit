import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice"; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// This export is used to export the things from the thunks.
export * from "./thunks/fetchUsers";
