import React from 'react'
import TaskData from './TaskData'


const TaskColomn = ({ColumnName,tasks,status}) => {
  return (
    <section className='task_column'>
       <h2 className='task_column_heading'>{ColumnName}</h2>
       {
        tasks.map((task,index)=>task.status===status && <TaskData key={index}
          title={task.task} 
        />)
       }
       
    </section>
  )
}

export default TaskColomn
