import React, {useState} from 'react'

import "./App.css"
import SearchBox from './components/SearchBox'
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskForm';
const App = () => {
  const [tasks,setTasks]=useState([]);
  console.log("tasks",tasks);
  return (
    <div className='app'>
      <SearchBox/>
      <main className='app_main'>
        <TaskColumn ColumnName="To Do" tasks={tasks} status="todo"></TaskColumn>
        <TaskColumn ColumnName="In Progress" className="task_column" tasks={tasks} status="inprogress"/>
        <TaskColumn ColumnName="Peer Review" className="task_column" tasks={tasks} status="peerreview"/>
        <TaskColumn ColumnName="Done" className="task_column" tasks={tasks} status="done"/>
      </main>
      <TaskForm setTasks={setTasks}/>
    </div>
  )
}

export default App

