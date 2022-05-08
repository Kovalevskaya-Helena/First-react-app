import React from 'react';
import css from './registration.module.css'
import { connect } from "react-redux";
import { TasksSelectors, TasksActions } from '../../store'
import { compose } from "redux";
import {withRouter} from 'react-router-dom'



export class RegistrationOriginal extends React.Component {
  state = {
    values: {
      login: '',
      password: ''
    },
    errors: {
      errorLogin: '',
      errorPassword: ''
    }
  }


  inputChangeHandler = (event) => {
    this.setState((prevState) => ({
      values: {
        ...prevState.values, [event.target.name]: event.target.value
      }, errors: {
        ...prevState.errors, [event.target.name]: ''
      }
    }))
  }



  clickHandler = () => {

    const isValid = ((this.state.values.login === process.env.REACT_APP_LOGIN) && (this.state.values.password === process.env.REACT_APP_PASSWORD));

    this.setState(() => ({
      errors: {
        errorLogin: this.state.values.login === process.env.REACT_APP_LOGIN ? '' : 'InValid Login',
        errorPassword: this.state.values.password === process.env.REACT_APP_PASSWORD ? '' : 'InValid Password'
      }
    }))
    if (isValid) {
      this.props.login();
      this.props.history.push(`/tasks`)
    }


  }


  render() {
    const { values, errors } = this.state;

    return (
      <div className={css.form}>

        <div className={css.wrapper}>
          <header className={css.header}>
            <h1 className={css.headering}>Hello there!</h1>
          </header>
          <div className={css.inputcontainer}>
            <input className={css.input} name='login' type='text' placeholder="Login" value={values.login} onChange={this.inputChangeHandler} />
            {errors.errorLogin && <div>{errors.errorLogin}</div>}
            <input className={css.input} name='password' type='password' placeholder="Password" value={values.password} onChange={this.inputChangeHandler} />
            {errors.errorPassword && <div>{errors.errorPassword}</div>}
          </div>
          <button type='button' className={css.button} onClick={this.clickHandler} >Sign in</button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    login: TasksSelectors.login(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(TasksActions.login())
  }

}



export const Registration = compose(withRouter,connect(mapStateToProps,
  mapDispatchToProps))(RegistrationOriginal);



