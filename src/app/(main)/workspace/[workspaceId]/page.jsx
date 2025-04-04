import AddTask from "@/components/AddTask";
import ContentHead from "@/components/ContentHead";
import { BreadcrumbWithCustomSeparator } from "@/components/Headerbreadcrumb";
import WorkspaceDetail from "@/components/WorkspaceDetail";
import React from "react";

const workspace = async ({ params }) => {
  const { workspaceId } = await params;
  return (
    <div className="flex flex-col gap-20 mt-5 justify-between w-full">
      <BreadcrumbWithCustomSeparator className="w-full"></BreadcrumbWithCustomSeparator>
      <div>
        <WorkspaceDetail></WorkspaceDetail>
        <ContentHead workspaceId={workspaceId}></ContentHead>
        
      </div>
      <AddTask></AddTask>
    </div>
  );
};

export default workspace;
