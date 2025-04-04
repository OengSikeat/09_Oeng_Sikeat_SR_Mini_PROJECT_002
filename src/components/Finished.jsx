"use server";
import React from "react";
import CardComponent from "./card";
import { getTaskAction } from "@/app/service/task.service";

const Finished = async ({data}) => {
  
  
  return (
    <div>
      <h2 className="text-[#009990] font-medium mb-4 pb-2 border-b border-[#009990]">
        Finished
      </h2>
      {data.map((task)=>(
        <CardComponent task={task} key={task.taskId}/>
      ))}
      
    </div>
  );
};

export default Finished;
