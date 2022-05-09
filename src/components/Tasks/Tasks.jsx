import React,{useState} from 'react';
import { CheckboxGroup } from '../common';
import css from './styles.module.css';
import { filterOptions } from './constants';
import {useSelector,useDispatch } from 'react-redux'
import { TasksSelectors,TasksActionsTask,TasksActionsFilter } from '../../store'

import {useHistory } from 'react-router-dom'

export function Tasks () {

 const [taskInput,setTaskInput]=useState('');
  const tasks=useSelector(TasksSelectors.getTasks);
  const filter=useSelector(TasksSelectors.getFilters);
  const history=useHistory();
  const dispatch=useDispatch();
  const deleteTasks=(id) => dispatch(TasksActionsTask.deleteTasks(id));
    const addTasks=(task) => dispatch(TasksActionsTask.addTasks(task));
   const  toggleTasks=(id) => dispatch(TasksActionsTask.toggleTasks(id));
    const changeFilter=(event) => dispatch(TasksActionsFilter.changeFilter(event));

 
  const deleteTaskHandler = (id) => {
    deleteTasks(id);
  }
  const inputChangeHandler = (event) => {setTaskInput(event.target.value ) }

  const addTaskHandler = () => {
  addTasks({ label: taskInput, isDone: false });
    setTaskInput({ taskInput: '' })
  }
  const toggleCheckbox = (id) => {
    toggleTasks(id);
  }

  const changeFilterHandler = (event) => { changeFilter(event.target.value) }
  const buttonHandler=(id)=>{
    history.push(`/task/${id}`)

  }


  
    return (
      <div className={css.wrapper}>
        <h1 className={css.header}>MY TODO</h1>
        <form >
          <input className={css.headerinput} value={taskInput} onChange={inputChangeHandler} />
          <button className={css.button} type="button" onClick={addTaskHandler}>Add task</button>
        </form>
        <div>
          <CheckboxGroup options={filterOptions} value={filter} onChange={changeFilterHandler} />
        </div>
        <ul>
          {tasks.map(({ id, label, isDone }) => (
            <li className={css.todoitem} key={id}>
              <input className={css.checkbox} type="checkbox" checked={isDone} onChange={() => {
              toggleCheckbox(id)
              }} />
              {label}
              <button className={css.button} onClick={()=>{buttonHandler(id)}}>Перейти</button>
              {isDone && <button className={css.button} onClick={() => { deleteTaskHandler(id) }}>Delete</button>}
            </li>
          ))}
        </ul>
      </div>
    );


  }





