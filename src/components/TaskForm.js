import React from 'react'

import "./TaskForm.css";
const TaskForm = () => {
  return (
    <div>
       <form className='form'>
            <div className='box_form'>
                <h1>Task</h1>
                <level>Add Title</level>
                <input placeholder='Add Title' type="text" /><br />
                <level>Add Description</level>
                <textarea placeholder='Add Description' type="text" /><br />
                <div className='addtask'>
                    <button type="submit" >Add</button>
                </div>
                
            </div>
            

       </form>
        
    </div>
    
  )
}

export default TaskForm
