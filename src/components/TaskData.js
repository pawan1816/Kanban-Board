import React from 'react'

import TaskCard from './TaskCard'
const TaskData = ({columnname,status,description}) => {
  return (
    <div>
      <TaskCard columnname={columnname} status={status} description={description}/>
    </div>
  )
}

export default TaskData
