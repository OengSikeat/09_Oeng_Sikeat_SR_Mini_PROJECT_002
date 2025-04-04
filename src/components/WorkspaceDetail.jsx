import React from 'react'
import { Star } from "lucide-react";

const WorkspaceDetail = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-[#1e293b]">HRD Design</h1>
      <button className="text-[#94a3b8] hover:text-[#1e293b]">
        <Star size={20} />
      </button>
    </div>
  )
}

export default WorkspaceDetail