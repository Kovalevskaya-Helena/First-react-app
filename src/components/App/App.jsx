import React from 'react';
import { Link, Switch } from 'react-router-dom';
import css from './menu.module.css';
import {Registration} from'../Registration'
import {Route, Redirect} from 'react-router-dom'
import {Tasks} from '../Tasks/Tasks'
import {About} from '../About'
import {Task} from '../Task'
import {useSelector,useDispatch} from "react-redux";
import {TasksSelectors,TasksActionsLogin} from '../../store'



export function App (){

  const login=useSelector(TasksSelectors.login);
  const dispatch=useDispatch();
  const logOut= () => dispatch(TasksActionsLogin.logout());

  const clickHandlerLogOut=()=>{
    logOut();
  }

  
    return(
      <>    
    <div className={css.container}>
      <ul className={css.linkcontainer}>
        {['tasks','about'].map((route)=>(<li className={css.link}  key={route}><Link className={css.link} to ={`/${route}`}>{route}</Link></li>))}
      </ul>
      {login && <button className={css.button} onClick={clickHandlerLogOut} >Sign out</button>}
      </div>
      <Switch>
        <Route path='/login'exact>
          <Registration/> 
        </Route>
        {!login && <Redirect to="/login" />}
        <Route path='/about'exact>
          <About/>
        </Route>
        <Route path="/task/:id" exact>
            <Task />
          </Route>
          <Route path="/tasks" exact>
            <Tasks />
          </Route>
          <Redirect to="/tasks" />
      </Switch>
      
      </>

    )
  }






