import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cidades",
  initialState: {
    items: [],
    favoriteItems: [],
  },
  reducers: {
    addCityItem: (state, action) => {
      state.items.push({
        id: action.payload.id,
        name: action.payload.name,
        uf: action.payload.uf,
        lat: action.payload.lat,
        lon: action.payload.lon,
        temp: action.payload.temp,
        temp_max: action.payload.temp_max,
        temp_min: action.payload.temp_min,
        weather: action.payload.weather,
      });
    },
    removeCityItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    addToFavorites: (state, action) => {
      state.favoriteItems.push({
        id: action.payload.id,
        name: action.payload.name,
        uf: action.payload.uf,
        lat: action.payload.lat,
        lon: action.payload.lon,
        temp: action.payload.temp,
        temp_max: action.payload.temp_max,
        temp_min: action.payload.temp_min,
      });
    },
    removeFromFavorites: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  addCityItem,
  removeCityItem,
  addToFavorites,
  removeFromFavorites,
} = citiesSlice.actions;

export const getCitiesList = (state) => state.cidades.items;
export const getFavorites = (state) => state.cidades.favoriteItems;

export default citiesSlice.reducer;
