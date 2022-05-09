import { createSlice } from "@reduxjs/toolkit";
import { FILTER_STATUSES } from "../constants";
const INITIAL_STATE_FILTER = { filter: FILTER_STATUSES.ALL };

export const { actions, reducer } = createSlice({
  name: "filter",
  initialState: INITIAL_STATE_FILTER,
  reducers: {
    changeFilter: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});
