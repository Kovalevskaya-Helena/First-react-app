import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { FILTER_STATUSES } from "../constants";

const INITIAL_STATE_TASKS = {
  tasks: [
    { id: "1", label: "Learn JS", isDone: true, description: "" },
    { id: "2", label: "Learn React", isDone: false, description: "" },
    { id: "3", label: "Learn Redux", isDone: false, description: "" },
    { id: "4", label: "Learn Typescript", isDone: false, description: "" },
  ],
  filter: FILTER_STATUSES.ALL,
};

export const { actions, reducer } = createSlice({
  name: "tasks",
  initialState: INITIAL_STATE_TASKS,
  reducers: {
    deleteTasks: (state, action) => {
      return {
        tasks: state.tasks.filter(
          ({ id: taskId }) => taskId !== action.payload
        ),
      };
    },
    addTasks: (state, action) => {
      const id = uuidv4();
      return {
        tasks: state.tasks.concat({ ...action.payload, id }),
      };
    },
    toggleTasks: (state, action) => {
      return {
        tasks: state.tasks.map((task) =>
          task.id !== action.payload ? task : { ...task, isDone: !task.isDone }
        ),
      };
    },
    addDescription: (state, action) => {
      return {
        tasks: state.tasks.map((task) =>
          task.id !== action.payload.id
            ? task
            : { ...task, description: action.payload.text }
        ),
      };
    },
  },
});
