import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";

export const citiesSlice = createSlice({
  name: "cidades",
  initialState: {
    items: [],
    favoriteItems: [],
  },
  reducers: {
    addCityItem: (state, action) => {
      const hasCity = state.items.find((city) => {
        return city.name === action.payload.name;
      });

      const hasFavorite = state.favoriteItems.find((city) => {
        return city.name === action.payload.name;
      });

      if (hasCity || hasFavorite) {
        Toast.show({
          type: "info",
          text1: "Aviso",
          text2: "Esta cidade já foi adicionada, tente outro.",
          position: "bottom",
        });
      } else {
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

        Toast.show({
          type: "success",
          text1: "Aviso",
          text2: "Adicionado com sucesso!",
          position: "bottom",
        });
      }
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
        weather: action.payload.weather,
      });

      state.items = state.items.filter((item) => item.id !== action.payload.id);
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
