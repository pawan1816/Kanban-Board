import React, {useState,useEffect} from 'react'

import "./App.css"
import SearchBox from './components/SearchBox'
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskForm';

const oldTasks=localStorage.getItem("tasks");
console.log(oldTasks);
const App = () => {
  const [tasks,setTasks]=useState(JSON.parse(oldTasks)||[]);
  const [activeCard,setActiveCard]=useState(null);
  
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
  const handleDelete=(taskIndex)=>{
    const newTasks=tasks.filter((task,index)=> index!==taskIndex);
    setTasks(newTasks) 
  };
  const onDrop=(status,position)=>{

    if(activeCard==null || activeCard===undefined) return;
    const taskToMove=tasks[activeCard];
    const updatedTasks=tasks.filter((task,index)=>index!==activeCard);
    
    updatedTasks.splice(position,0,{
      ...taskToMove,
      status:status
    })
    setTasks(updatedTasks);
  }
  return (
    <div className='app'>
    
      <SearchBox/>
     
      <main className='app_main'>
        <TaskColumn columnname="To Do" className="task_column" tasks={tasks} handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} status="todo"></TaskColumn>
        <TaskColumn columnname="In Progress" className="task_column" tasks={tasks} handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} status="inprogress"/>
        <TaskColumn columnname="Peer Review" className="task_column" tasks={tasks} handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} status="peerreview"/>
        <TaskColumn columnname="Done" className="task_column" tasks={tasks} handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} status="done"/>
      </main>
      <TaskForm setTasks={setTasks}/>
    </div>
  )
}

export default App

