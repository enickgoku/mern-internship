import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239c72c00018a",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
