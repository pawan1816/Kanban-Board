import React from 'react'
import TaskCard from './TaskCard'

const TaskColomn = ({columnname,tasks,status,handleDelete}) => {
  return (
    <section className='task_column'>
       <h2 className='task_column_heading'>{columnname}</h2>
       {
         tasks.map((task,index)=> task.status===status && 
           <TaskCard columnname={task.task} status={status} description={task.description}
            handleDelete={handleDelete}
            index={index}
           />
           
        )}
       
    </section>
  )
}

export default TaskColomn
