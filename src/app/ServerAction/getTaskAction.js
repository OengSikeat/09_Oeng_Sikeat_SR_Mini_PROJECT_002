"use server";
import headerToken from "@/app/api/headerToken";

export const getAllTask = async (id) => {
  
  const header = await headerToken();
  const res = await fetch(
    `${process.env.NEXT_APIURL}/tasks/workspace/${id}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
    {
      headers: header,
    }
  );

  const data = await res.json();
  return data;
};
