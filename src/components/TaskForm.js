import React, {useState} from 'react';

import "./TaskForm.css";
const TaskForm = ({setTasks}) => {
    
    const [taskData,setTaskData]=useState({
        task:"",
        status:"todo",
        description:"",
        tags:[],
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
    //    const name=e.target.name;
    //    const value=e.target.value;

       setTaskData(prev=>{
        return {...prev, [name]:value}
       });
       
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setTasks(prev=>{
            return [...prev,taskData];
        });
        setTaskData(
            {
                task:"",
                status:"todo",
                description:"",
                tags:[],
            }
        )
    }
    // const [task,setTask]=useState("");
    // const [status,setStatus]=useState("todo");
    // const [description,setDescription]=useState("");
    
    // const handletaskChange=e=>{
    //     setTask(e.target.value);
    // };
    // const handleStatusChange=e=>{
    //     setStatus(e.target.value);
    // };
    // const handleDescription=e=>{
    //     setDescription(e.target.value);
    // };
    // console.log(task,status,description);
  return (
    <div>
       <form className='form' onSubmit={handleSubmit}>
            <div className='box_form'>
                <h1>Task</h1>
                <div className='formmain'>
                    <div className='row'>
                        <h1>Title</h1>
                        <input placeholder='Add Title' type="text" name="task" value={taskData.task} onChange={handleChange}/>
                    </div>
                    <div className='row'>
                        <h1>Description</h1>
                        <textarea placeholder='Add Description' value={taskData.description} type="text" name="description" onChange={handleChange}/>
                    </div>
                    <div>
                        <select name="status" value={taskData.status} className='task_status' onChange={handleChange}> 
                            <option value='todo'>To Do</option>
                            <option value='inprogress'>In Progress</option>
                            <option value='peerreview'>Peer Review</option>
                            <option value='done'>Done</option>
                        </select>
                    </div>
                    <br />
                </div>
                
                <div className='addtask'>
                    <button type="submit">Add</button>
                </div>
            </div>
       </form>
        
    </div>
    
  )
}

export default TaskForm
