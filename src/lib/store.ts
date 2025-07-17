import { configureStore } from "@reduxjs/toolkit";
import { counterSlicer } from "./CounterSlice";
import userReducer from './userSlice';


export let store = configureStore({
  reducer: {
    count: counterSlicer,
    user: userReducer,
  }
})