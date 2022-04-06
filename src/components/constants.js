export const tasks = [
  { id: 1, label: "Learn JS", isDone: true },
  { id: 2, label: "Learn React", isDone: false },
  { id: 3, label: "Learn Redux", isDone: false },
  { id: 4, label: "Learn Typescript", isDone: false },
];

export const FILTER_STATUSES = {
  ALL: "All",
  DONE: "Done",
  ACTIVE: "Active",
};

export const filterOptions = [
  { value: FILTER_STATUSES.ALL, label: "All" },
  { value: FILTER_STATUSES.ACTIVE, label: "Active" },
  { value: FILTER_STATUSES.DONE, label: "Done" },
];
