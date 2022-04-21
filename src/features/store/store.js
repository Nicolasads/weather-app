import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../cities/citiesSlice";

export const store = configureStore({
  reducer: {
    cidades: citiesReducer,
  },
});
