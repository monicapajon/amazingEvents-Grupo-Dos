import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
// dispatch  getAll events
// reduc
export const getAllEvents = createAsyncThunk("events/listEvents", async () => {
  const response = await axios
    .get("http://localhost:3000/eventos")
    .catch((error) => {
      return error.data;
    });
  return response.data;
});
const initialState = {
  listEvents: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, () => {
        // dispatch
        console.log("Trayendo los eventos wey");
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        // use selector
        state.listEvents = action.payload;
      });
  },
});
export default eventSlice.reducer;

export const listOfEvents = (state) => state.events.listEvents;
