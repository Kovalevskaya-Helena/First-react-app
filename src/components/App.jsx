import React from 'react';
import { CheckboxGroup } from './common';
import css from './styles.module.css';
import { FILTER_STATUSES, filterOptions} from './constants';

const filterTask = (filter, task) => {
  if (filter === FILTER_STATUSES.ALL) {
    return true;
  }

  if (filter === FILTER_STATUSES.DONE) {
    return task.isDone;
  }

  return !task.isDone;
}

const generateUniqId = () => {
  const id = Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return id;
}

export class App extends React.Component {
  state = {
    tasks: [
  { id: 1, label: "Learn JS", isDone: true },
  { id: 2, label: "Learn React", isDone: false },
  { id: 3, label: "Learn Redux", isDone: false },
  { id: 4, label: "Learn Typescript", isDone: false },
    ],
    taskInput: '',
    filter: FILTER_STATUSES.ALL,
  }

  deleteTaskHandler=(id)=>{
    this.setState((prevState)=>(
      {tasks:prevState.tasks.filter(({id:taskId})=>taskId!==id)}))
  }
  inputChangeHandler=(event)=>{this.setState({taskInput:event.target.value})}

  addTaskHandler=()=>{
    this.setState((prevState)=>({tasks:prevState.tasks.concat([{ id: generateUniqId(),  label: prevState.taskInput, isDone: false }
    ])
  }))
  }
  toggleCheckbox=(id)=>{
    this.setState((prevState)=>({tasks:prevState.tasks.map((task)=>{
      if(task.id!==id){
        return task
      }
      return { ...task, isDone: !task.isDone };
    })}))
  }



  changeFilterHandler=(event)=>{this.setState({filter:event.target.value});}

  render(){
    const { tasks, taskInput, filter } = this.state;
    return (
    <div className={css.wrapper}>
      <h1 className={css.header}>MY TODO</h1>
      <form >
        <input className={css.headerinput} value={taskInput} onChange={this.inputChangeHandler}/>
        <button className={css.button} type="button" onClick={this.addTaskHandler}>Add task</button>
      </form>
      <div>
        <CheckboxGroup options={filterOptions} value={filter} onChange={this.changeFilterHandler}/>
      </div>
      <ul>
        {tasks.filter((task) => filterTask(filter, task)).map(({id, label, isDone }) => (
          <li className={css.todoitem} key={id}>
            <input className={css.checkbox} type="checkbox" checked={isDone} onChange={() => {
                this.toggleCheckbox(id)
              }} />
            {label}
            {isDone && <button className={css.button} onClick={()=>{this.deleteTaskHandler(id)}}>Delete</button>}
          </li>
        ))}
      </ul>
    </div>
  );

    
  }
}
