import { combineReducers, configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../cities/citiesSlice";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = combineReducers({
  cidades: citiesReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistorReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistorReducer,
  middleware: [thunk],
});
