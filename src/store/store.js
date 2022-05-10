import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as toDoReducer } from "./slice/sliceTask";
import { reducer as filterReducer } from "./slice/sliceFilter";
import { reducer as loginReducer } from "./slice/sliceLogin";

const rootReducer = combineReducers({
  toDoReducer,
  filterReducer,
  loginReducer,
});

export const store = configureStore({ reducer: rootReducer });
