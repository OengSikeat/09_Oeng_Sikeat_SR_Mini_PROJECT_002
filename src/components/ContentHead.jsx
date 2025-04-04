import React from "react";
import NotStarted from "./NotStarted";
import InProgress from "./InProgress";
import Finished from "./Finished";
import { getTaskAction } from "@/app/service/task.service";

const ContentHead = async ({ workspaceId }) => {
  const { payload: data } = await getTaskAction(workspaceId);
  const NotStartedData = data.filter((task) => task.status === "NOT_STARTED");
  const InProgressData = data.filter((task) => task.status === "IN_PROGRESS");
  const FinishedData = data.filter((task) => task.status === "FINISHED");

  return (
    <div className="grid grid-cols-3 gap-6">
      <NotStarted data={NotStartedData} />
      <InProgress data={InProgressData} />
      <Finished data={FinishedData} />
    </div>
  );
};

export default ContentHead;
