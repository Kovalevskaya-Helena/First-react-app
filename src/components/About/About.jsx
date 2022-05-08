import React from 'react';
import css from './about.module.css';
export const About =()=>{
  return(
    <div className={css.container}>
      <header className={css.header}>Hello,there!</header>
      <div className={css.subheader}>Todo List is a list of things that you need to complete or do what you want to do.</div>
      <div>
        <ul> SimpleTodoList allows you to:
          <li>add new tasks to the list;</li>
          <li>mark completed tasks (at the same time, they are immediately excluded from the list of active tasks and transferred to the completed one);</li>
          <li>remove items to the trash;</li>
          <li>switch between cases (active, completed and deleted);</li>
        </ul>
      </div>
    </div>
  )
}


