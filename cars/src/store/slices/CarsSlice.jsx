import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "", // it has the name of the car to search
    data: [], // it has id, name, and cost
  },
  // combined reducers
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // assumtion
      // action.payload === {name: 'Ford', cost: 140}
      // state.cars = [...state.cars, ...action.payload];
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // assumption
      // action.payload === the id of the car we want to remove
      // state.cars = state.cars.filter((car) => car.id!== action.payload);
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
