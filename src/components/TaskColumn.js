import React from 'react'
import TaskCard from './TaskCard'
import DropArea from './DropArea'

const TaskColomn = ({columnname,tasks,status,handleDelete,setActiveCard,onDrop}) => {
  return (
    <section className='task_column'>
       <h2 className='task_column_heading'>{columnname}</h2>
       <DropArea onDrop={()=>onDrop(status,0)}/>
       {
         tasks.map((task,index)=> task.status===status && 
         <React.Fragment key={index}>
           <TaskCard 
            columnname={task.task} 
            status={status} 
            description={task.description}
            handleDelete={handleDelete}
            index={index}
            setActiveCard={setActiveCard}
           />
           <DropArea onDrop={()=>onDrop(status,index+1)}/>
          </React.Fragment>
        )}
       
    </section>
  )
}

export default TaskColomn
