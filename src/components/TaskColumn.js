import React from 'react'
import TaskData from './TaskData'



const TaskColomn = (props) => {
  return (
    <section className='task_column'>
       <h2 className='task_column_heading'>{props.ColumnName}</h2>
       <TaskData/>
    </section>
  )
}

export default TaskColomn
