import { configureStore } from "@reduxjs/toolkit";

import designSlice from "./designSlice";

const store = configureStore({
  reducer: {
    design: designSlice.reducer,
  },
});



export default store;
