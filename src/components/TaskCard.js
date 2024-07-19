import React from 'react'

import "./TaskCard.css";
import deleteIcon from '../assists/3405244.png';
const TaskCard = ({columnname,status,description,handleDelete,index,setActiveCard}) => {
  return (
    <div className='task_card' draggable onDragStart={()=> setActiveCard(index)} onDragEnd={()=>setActiveCard(null)}>
      <h1>{columnname}</h1>
      <div className='task_card_bottom_line'>
            <p>{description}</p>
            <div class Name='task_delete' onClick={()=>handleDelete(index)}><img src={deleteIcon} className='deleteIcon'/></div>
        </div>
    </div>
    
  )
}

export default TaskCard
