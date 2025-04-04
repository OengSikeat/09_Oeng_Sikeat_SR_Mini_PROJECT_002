"use server";
import { getAllTask } from "../ServerAction/getTaskAction";

export const getTaskAction = async (Task) => {
  const res = await getAllTask(Task);
  return res;
};
