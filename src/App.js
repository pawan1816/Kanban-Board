import React from 'react'

import "./App.css"
import SearchBox from './components/SearchBox'
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskForm';
const App = () => {
  return (
    <div className='app'>
      <SearchBox/>
      <main className='app_main'>
        {/* <div className='addTask '>
            <TaskColumn ColumnName="To Do" ></TaskColumn>
            <p>Add</p>
        </div> */}
        <TaskColumn ColumnName="To Do" ></TaskColumn>
        <TaskColumn ColumnName="In Progress" className="task_column"/>
        <TaskColumn ColumnName="Peer Review" className="task_column"/>
        <TaskColumn ColumnName="Done" className="task_column"/>
      </main>
      <TaskForm/>

    </div>
  )
}

export default App

