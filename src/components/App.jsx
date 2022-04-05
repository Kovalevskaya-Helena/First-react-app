import { CheckboxGroup } from './common';
import css from './styles.module.css';
import { FILTER_STATUSES, filterOptions, tasks } from './constants';

 const filter = FILTER_STATUSES.ACTIVE;

const filterTask = (filter, task) => {
  if (filter === FILTER_STATUSES.ALL) {
    return true;
  }

  if (filter === FILTER_STATUSES.DONE) {
    return task.isDone;
  }

  return !task.isDone;
}

export function App() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.header}>MY TODO</h1>
      <form >
        <input className={css.headerinput}/>
        <button className={css.button} type="button">Add task</button>
      </form>
      <div>
        <CheckboxGroup options={filterOptions} value={FILTER_STATUSES.ACTIVE} />
      </div>
      <ul>
        {tasks.filter((task) => filterTask(filter, task)).map(({id, label, isDone }) => (
          <li className={css.todoitem} key={id}>
            <input className={css.checkbox} type="checkbox" checked={isDone} />
            {label}
            {isDone && <button className={css.button}>Delete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}
