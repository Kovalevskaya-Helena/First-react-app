
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { compose } from "redux";
import {TasksSelectors,TasksActions} from '../../store'
import css from './task.module.css';

export const TaskOriginal=(props)=>{

 const textAreaHandler=(event)=>{
    const text=event.target.value;
    const id=props.match.params.id
    props.addDescriptionTask(text,id);
  }

  const {id}=props.match.params;
  const task=props.getByIdTask(id);

  if(!task){
    return <div>This task is not found!</div>}
  return(

    <div className={css.container}>
      <div className ={css.task}>{task.label}</div>
      <textarea className={css.textarea} placeholder={'Typing in here now...'}cols="80" rows="10" onChange={textAreaHandler} ></textarea>
    </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    getByIdTask:(id)=>TasksSelectors.getByIdTask(id)(state),
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addDescriptionTask:(text,id)=>dispatch(TasksActions.addDescription(text,id))
  }
}

export const Task=compose(withRouter,connect(mapStateToProps,mapDispatchToProps))(TaskOriginal)
