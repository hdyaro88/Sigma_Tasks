import { configureStore } from "@reduxjs/toolkit";
import { TaskSlice } from "./TaskSlice";
import { UtilitySlice } from "./UtilitySlice";

const store = configureStore({
  reducer: {
    utility: UtilitySlice.reducer,
    task: TaskSlice.reducer,
  },
});
export default store;
