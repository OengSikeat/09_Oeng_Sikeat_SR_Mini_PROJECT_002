import { getAllWorkSpaces } from "@/app/service/workspace.service";
import AddTask from "@/components/AddTask";
import ContentHead from "@/components/ContentHead";
import { BreadcrumbWithCustomSeparator } from "@/components/Headerbreadcrumb";
import Sidebar from "@/components/Sidebar";
import WorkspaceDetail from "@/components/WorkspaceDetail";

import React from "react";

const page = async () => {
  return (
    <>
      <div className="flex flex-col justify-between h-[90%]">
        <div className="flex flex-col gap-10"></div>
        <div></div>
      </div>
    </>
  );
};

export default page;
