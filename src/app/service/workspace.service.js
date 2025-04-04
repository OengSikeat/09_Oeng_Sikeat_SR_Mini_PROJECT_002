"use server";
import headerToken from "../api/headerToken";
import { postWorkspaceAction } from "../ServerAction/getWorkspaceAction";

export const getAllWorkSpaces = async () => {
  const header = await headerToken();
  const res = await fetch(
    `${process.env.NEXT_APIURL}/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
    {
      headers: header,
    }
  );
  const data = await res.json();
  return data;
};
export const getAllWorkSpacebyId = async (workspaceId) => {
  const header = await headerToken();
  const res = await fetch(
    `${process.env.NEXT_APIURL}/workspace/${workspaceId}`,
    {
      headers: header,
    }
  );
  const data = await res.json();
  return data;
};

export const postWorkspace= async (Data) => {
  const {workSpaceData}= Data;  
  const res = postWorkspaceAction(workSpaceData);
  return res;
};