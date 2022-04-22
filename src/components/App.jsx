import React from 'react';
import { CheckboxGroup } from './common';
import css from './styles.module.css';
import { filterOptions} from './constants';
import {connect} from 'react-redux'
import {TasksSelectors, TasksActions} from '../store'

export class AppOriginal extends React.Component {
  state = {
    taskInput: '',
  }

  

  deleteTaskHandler=(id)=>{
    this.props.deleteTasks(id);
  }
  inputChangeHandler=(event)=>{this.setState({taskInput:event.target.value})}

  addTaskHandler=()=>{
  this.props.addTasks({ label: this.state.taskInput, isDone: false });
  this.setState({taskInput:''})
  }
  toggleCheckbox=(id)=>{
    this.props.toggleTasks(id);
  }

  changeFilterHandler=(event)=>{this.props.changeFilter(event.target.value)}


  render(){
    const {taskInput} = this.state;
    const {tasks,filter}=this.props
    console.log(this.props);
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
        {tasks.map(({id, label, isDone }) => (
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

const mapStateToProps=(state)=>{
  return {
    tasks:TasksSelectors.getTasks(state),
    filter:TasksSelectors.getFilters(state),
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    deleteTasks:(id)=>dispatch(TasksActions.deleteTasks(id)),
    addTasks:(task)=>dispatch(TasksActions.addTasks(task)),
    toggleTasks:(id)=>dispatch(TasksActions.toggleTasks(id)),
    changeFilter: (event) => dispatch(TasksActions.changeFilter(event))

  }
}
export const App = connect(mapStateToProps,mapDispatchToProps)(AppOriginal);
