import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
      console.log(state.name);
    },
    changeCost(state, action) {
      state.cost = action.payload;
      console.log(state.cost);
    },
  },
});

// This export the mini-reducer
export const { changeName, changeCost } = formSlice.actions;

// This exports the complete reducer (combined reducer)
export const formReducer = formSlice.reducer;
