import { FILTER_STATUSES } from "./constants";
const filterTask = (filter, task) => {
  if (filter === FILTER_STATUSES.ALL) {
    return true;
  }

  if (filter === FILTER_STATUSES.DONE) {
    return task.isDone;
  }

  return !task.isDone;
};

export const getTasksOriginal = (state) => state.toDoReducer.tasks;
export const getFilters = (state) => state.filterReducer.filter;
export const login = (state) => state.loginReducer.isAuth;

export const getTasks = (state) => {
  const tasks = getTasksOriginal(state);
  const filter = getFilters(state);
  return tasks.filter((task) => filterTask(filter, task));
};
export const getByIdTask = (taskId) => (state) =>
  getTasksOriginal(state).find(({ id }) => id === taskId);
