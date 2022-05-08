import { combineReducers, createStore } from "redux";
import { v4 as uuidv4 } from "uuid";
import { TASKS_ACTIONS, FILTER_STATUSES } from "./constants";
const INITIAL_STATE_TASKS = {
  tasks: [
    { id: "1", label: "Learn JS", isDone: true, description: "" },
    { id: "2", label: "Learn React", isDone: false, description: "" },
    { id: "3", label: "Learn Redux", isDone: false, description: "" },
    { id: "4", label: "Learn Typescript", isDone: false, description: "" },
  ],
  filter: FILTER_STATUSES.ALL,
};
const INITIAL_STATE_FILTER = { filter: FILTER_STATUSES.ALL };
const INITIAL_STATE_LOGIN = { isAuth: false };
const toDoReducer = (state = INITIAL_STATE_TASKS, action) => {
  switch (action.type) {
    case TASKS_ACTIONS.DELETE_TASK: {
      return {
        tasks: state.tasks.filter(
          ({ id: taskId }) => taskId !== action.payload
        ),
      };
    }
    case TASKS_ACTIONS.ADD_TASK: {
      const id = uuidv4();
      return {
        tasks: state.tasks.concat({ ...action.payload, id }),
      };
    }
    case TASKS_ACTIONS.TOGGLE_TASK: {
      return {
        tasks: state.tasks.map((task) =>
          task.id !== action.payload ? task : { ...task, isDone: !task.isDone }
        ),
      };
    }
    case TASKS_ACTIONS.ADD_DESCRIPTION: {
      return {
        tasks: state.tasks.map((task) =>
          task.id !== action.payload.id
            ? task
            : { ...task, description: action.payload.text }
        ),
      };
    }
    default:
      return state;
  }
};

const filterReducer = (state = INITIAL_STATE_FILTER, action) => {
  switch (action.type) {
    case TASKS_ACTIONS.CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const loginReducer = (state = INITIAL_STATE_LOGIN, action) => {
  switch (action.type) {
    case TASKS_ACTIONS.LOGIN: {
      return {
        isAuth: true,
      };
    }
    case TASKS_ACTIONS.LOGOUT: {
      return {
        isAuth: false,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  toDoReducer,
  filterReducer,
  loginReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
