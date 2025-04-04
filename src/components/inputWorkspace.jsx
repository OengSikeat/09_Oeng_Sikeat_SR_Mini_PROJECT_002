"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { postWorkspaceAction } from "@/app/ServerAction/getWorkspaceAction";

const WorkspaceToggleForm = () => {
    
  const [showForm, setShowForm] = useState(false);
  const [workspaceName, setWorkspaceName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await postWorkspaceAction({ workspaceName });
      
      if (response?.success) {
        
        setShowForm(false); // Close the modal
        setWorkspaceName(""); // Reset input
      } else {
        setError(response?.message || "Failed to create workspace");
      }
    } catch (err) {
        console.log(err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <>
      {/* Toggle Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-400 dark:textWhite">New Workspace</h2>
        <button 
          onClick={() => setShowForm(true)} 
          className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 border rounded-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>

      {/* Modal Overlay */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 bg-opacity-50 z-50">
          {/* Form Container */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 relative">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">Create New Workspace</h3>

            {/* Close Button */}
            <button 
              onClick={() => setShowForm(false)} 
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              ✕
            </button>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                type="text" 
                placeholder="Enter workspace name" 
                className="w-full border-gray-300 rounded-lg p-2" 
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                required
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button 
                type="submit" 
                className="w-full bg-blue-500 text-white rounded-lg"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkspaceToggleForm;
