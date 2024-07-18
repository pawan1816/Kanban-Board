import React, {useState,useEffect} from 'react'

import "./App.css"
import SearchBox from './components/SearchBox'
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskForm';

const oldTasks=localStorage.getItem("tasks");
console.log(oldTasks);
const App = () => {
  const [tasks,setTasks]=useState(JSON.parse(oldTasks)||[]);
  
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
  const handleDelete=(taskIndex)=>{
    const newTasks=tasks.filter((task,index)=> index!==taskIndex);
    setTasks(newTasks) 
  };
  return (
    <div className='app'>
    
      <SearchBox/>
     
      <main className='app_main'>
        <TaskColumn columnname="To Do" className="task_column" tasks={tasks} handleDelete={handleDelete} status="todo"></TaskColumn>
        <TaskColumn columnname="In Progress" className="task_column" tasks={tasks} handleDelete={handleDelete} status="inprogress"/>
        <TaskColumn columnname="Peer Review" className="task_column" tasks={tasks} handleDelete={handleDelete} status="peerreview"/>
        <TaskColumn columnname="Done" className="task_column" tasks={tasks} handleDelete={handleDelete} status="done"/>
      </main>
      <TaskForm setTasks={setTasks}/>
    </div>
  )
}

export default App

