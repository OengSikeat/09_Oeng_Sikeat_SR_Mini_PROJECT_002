import { Grid, Plus } from 'lucide-react'
import React from 'react'

const AddTask = () => {
  return (
    <div>
      <footer className="h-16 border-t border-[#e2e8f0] bg-white flex items-center px-6 justify-between">
        <div></div>
        <div className="flex items-center space-x-2">
          <button className="bg-[#4379f2] text-white rounded-full px-4 py-2 flex items-center">
            <Plus size={16} className="mr-1" />
            New Task
          </button>
          <button className="text-[#94a3b8] hover:text-[#1e293b] p-2">
            <Grid size={20} />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default AddTask