import React from 'react';
import { Link, Switch } from 'react-router-dom';
import css from './menu.module.css';
import {Registration} from'../Registration'
import {withRouter, Route, Redirect} from 'react-router-dom'
import {Tasks} from '../Tasks/Tasks'
import {About} from '../About'
import {Task} from '../Task'
import { compose } from "redux";
import { connect } from "react-redux";
import {TasksSelectors,TasksActions} from '../../store'



export class AppOriginal extends React.Component{


  clickHandlerLogOut=()=>{
    this.props.logout();
  }

  render(){
    const { login } = this.props;
    return(
      <>    


    <div className={css.container}>
      <ul className={css.linkcontainer}>
        {['tasks','about'].map((route)=>(<li className={css.link}  key={route}><Link className={css.link} to ={`/${route}`}>{route}</Link></li>))}
      </ul>
      {login && <button className={css.button} onClick={this.clickHandlerLogOut} >Sign out</button>}
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
}

  

  const mapStateToProps = (state) => {
    return {
      login: TasksSelectors.login(state),
    };
  };
  const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(TasksActions.loginout()),
});
 

export const  App = compose(withRouter,connect(mapStateToProps,mapDispatchToProps))(AppOriginal)



