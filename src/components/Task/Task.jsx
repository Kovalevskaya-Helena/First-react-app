
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch } from "react-redux";
import {TasksSelectors,TasksActions} from '../../store'
import css from './task.module.css';

export const Task=()=>{

const params = useParams();
  const getByIdTask=useSelector((state)=>(id)=>TasksSelectors.getByIdTask(id)(state));
  const dispatch=useDispatch;
  const addDescriptionTask=(text,id)=>dispatch(TasksActions.addDescription(text,id));


 const textAreaHandler=(event)=>{
    const text=event.target.value;
    const id=params.id
    addDescriptionTask(text,id);
  }

  const {id}=params;
  const task=getByIdTask(id);

  if(!task){
    return <div>This task is not found!</div>}
  return(

    <div className={css.container}>
      <div className ={css.task}>{task.label}</div>
      <textarea className={css.textarea} placeholder={'Typing in here now...'}cols="80" rows="10" onChange={textAreaHandler} ></textarea>
    </div>
  )
}


