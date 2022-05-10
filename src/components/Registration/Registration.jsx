import React,{useState} from 'react';
import css from './registration.module.css'
import {useSelector,useDispatch } from "react-redux";
import { TasksSelectors, TasksActionsLogin } from '../../store'
import {useHistory} from 'react-router-dom'




export function Registration () {


  const [values,setValues]=useState({login:'',password:''});
  const [errors,setErrors]=useState({errorLogin:'',errorPassword:''});
  const login =useSelector(TasksSelectors.login);
  const dispatch=useDispatch();
  const history=useHistory();
  const logIn= () => dispatch(TasksActionsLogin.login())

  


  const inputChangeHandlerLogin = (event) => {
    setValues((prevState) => ({
      ...prevState, login: event.target.value
    }))
    setErrors((prevState) => ({
      ...prevState, errorLogin: '', errorPassword:''
    }))
  }
  const inputChangeHandlerPassword = (event) => {
    setValues((prevState) => ({
      ...prevState, password: event.target.value
    }))
    setErrors((prevState) => ({
      ...prevState, errorLogin: '', errorPassword:''
    }))
  }



  const clickHandler = () => {

    const isValid = ((values.login === process.env.REACT_APP_LOGIN) && (values.password === process.env.REACT_APP_PASSWORD));

    setErrors((prevState) => ({
       ...prevState, errorLogin: values.login=== process.env.REACT_APP_LOGIN ? '' : 'InValid Login',
        errorPassword:values.password === process.env.REACT_APP_PASSWORD ? '' : 'InValid Password'
      
    }))
    if (isValid) {
      logIn();
      history.push(`/tasks`)
    }


  }

    return (
      <div className={css.form}>

        <div className={css.wrapper}>
          <header className={css.header}>
            <h1 className={css.headering}>Hello there!</h1>
          </header>
          <div className={css.inputcontainer}>
            <input className={css.input} name='login' type='text' placeholder="Login" value={values.login} onChange={inputChangeHandlerLogin} />
            {errors.errorLogin && <div>{errors.errorLogin}</div>}
            <input className={css.input} name='password' type='password' placeholder="Password" value={values.password} onChange={inputChangeHandlerPassword} />
            {errors.errorPassword && <div>{errors.errorPassword}</div>}
          </div>
          <button type='button' className={css.button} onClick={clickHandler} >Sign in</button>
        </div>
      </div>
    )
  }









