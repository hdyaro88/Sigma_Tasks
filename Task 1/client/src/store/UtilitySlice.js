import { createSlice } from "@reduxjs/toolkit";

export const UtilitySlice = createSlice({
  name: "utlitySlice",
  initialState: { loader: { status: false, message: null } },
  reducers: {
    toggleLoader(state, action) {
      state.loader.status = action.payload.status;
      state.loader.message = action.payload.message;
    },
  },
});

export const utilityActions = UtilitySlice.actions;
