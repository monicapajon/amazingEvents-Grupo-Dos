import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // o 'redux-persist/lib/session' para sessionStorage
import eventSlice from "../Reducers/events";
import cartSlice from "../Reducers/Cart";

const persistConfig = {
  key: "root", // clave para el almacenamiento local
  storage,
};

const rootReducer = {
  events: eventSlice,
  cart: persistReducer(persistConfig, cartSlice),
};

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
