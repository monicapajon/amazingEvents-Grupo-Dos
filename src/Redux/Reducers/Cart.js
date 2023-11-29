import { createSlice } from "@reduxjs/toolkit";

const initialState = { listCart: [] };

const eliminarUnRepetido = (array, propertyName, propertyValue) => {
  const indexToRemove = array.findIndex(
    (obj) => obj[propertyName] === propertyValue
  );
  if (indexToRemove !== -1) {
    return array.slice(0, indexToRemove).concat(array.slice(indexToRemove + 1));
  }
  return array;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.listCart.push(action.payload);
    },

    removeOneEvent: (state, action) => {
      state.listCart = eliminarUnRepetido(
        state.listCart,
        "name",
        action.payload
      );
    },
  },
});

export default cartSlice.reducer;
export const { addEvent, removeEvent, restartCart, removeOneEvent } =
  cartSlice.actions;
export const myCart = (state) => state.cart.listCart;
