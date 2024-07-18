import React from 'react'

import "./TaskCard.css";
import deleteIcon from '../assists/3405244.png';
const TaskCard = ({columnname,status,description,handleDelete,index}) => {
  return (
    <div className='task_card'>
      <h1>{columnname}</h1>
      <div className='task_card_bottom_line'>
            <p>{description}</p>
            <div class Name='task_delete' onClick={()=>handleDelete(index)}><img src={deleteIcon} className='deleteIcon'/></div>
        </div>
    </div>
    
  )
}

export default TaskCard
