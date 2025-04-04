import React from 'react'
import CardComponent from './card'

const NotStarted = ({data}) => {
  return (
    <div>
      <h2 className="text-[#f96666] font-medium mb-4 pb-2 border-b border-[#f96666]">
        Not Started
      </h2>

      {data.map((task)=>(
        <CardComponent task={task} key={task.taskId}/>
      ))}
    </div>
  )
}

export default NotStarted