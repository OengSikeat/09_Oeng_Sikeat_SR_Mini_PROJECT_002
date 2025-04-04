import React from "react";
import CardComponent from "./card";

const InProgress = ({data}) => {
  
  return (
    <div>
      <h2 className="text-[#4379f2] font-medium mb-4 pb-2 border-b border-[#4379f2]">
        In Progress
      </h2>

      {data.map((task)=>(
        <CardComponent task={task} key={task.taskId}/>
      ))}
    </div>
  );
};

export default InProgress;