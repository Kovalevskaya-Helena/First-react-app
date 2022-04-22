import { TASKS_ACTIONS } from "./constants";

export const deleteTasks = (id) => ({
  type: TASKS_ACTIONS.DELETE_TASK,
  payload: id,
});

export const addTasks = (task) => ({
  type: TASKS_ACTIONS.ADD_TASK,
  payload: task,
});
export const toggleTasks = (id) => ({
  type: TASKS_ACTIONS.TOGGLE_TASK,
  payload: id,
});

export const changeFilter = (event) => ({
  type: TASKS_ACTIONS.CHANGE_FILTER,
  payload: event,
});
