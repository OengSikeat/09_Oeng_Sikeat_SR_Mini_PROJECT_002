"use server";

import headerToken from "../api/headerToken";

export const postWorkspaceAction = async (workspaceData) => {
    
    const token = await headerToken(); 
    try {
      const res = await fetch(`${process.env.NEXT_APIURL}/workspace`, {
        method: "POST", 
        headers: {
          ...token, 
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(workspaceData), 
      });
  
     
      const data = await res.json(); 
      return data; 
    } catch (error) {
      console.error("Error posting workspace:", error);
    }
  };