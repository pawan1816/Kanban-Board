import React from 'react'

import "./TaskCard.css";
import deleteIcon from '../assists/3405244.png';
const TaskCard = (props) => {
  return (
    <div className='task_card'>
      <h1>{props.TaskTitle}</h1>
      <div className='task_card_bottom_line'>
            <p>{props.TaskDescription}</p>
            <div className='task_delete'><img src={deleteIcon} className='deleteIcon'/></div>
        </div>
    </div>
    
  )
}

export default TaskCard
